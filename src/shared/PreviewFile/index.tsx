import { useState, useEffect } from 'react';
import { PreviewContainer, PreviewLabel } from './PreviewFile.styled';

interface IPreviewFile {
  file: File;
  width: number | 'auto';
  height: number | 'auto';
}

const PreviewFile = ({ file, width, height }: IPreviewFile) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      if (isFileImage(file)) {
        setPreview(reader.result as string);
      } else {
        setPreview('/default.svg');
      }
    };

    return () => {
      reader.abort();
    };
  }, [file]);

  function isFileImage(file: File) {
    return file && file['type'].split('/')[0] === 'image';
  }

  if (preview) {
    return (
      <PreviewContainer>
        <img
          src={preview}
          className="preview"
          alt="Preview"
          width={width}
          height={height}
        />
        <PreviewLabel>{file.name}</PreviewLabel>
      </PreviewContainer>
    );
  }

  return null;
};

export default PreviewFile;
