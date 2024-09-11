import { useState, useEffect } from 'react';
import {
  DeleteBtn,
  PreviewContainer,
  PreviewLabel,
  RelWrap,
  XIcon,
} from './PreviewFile.styled';

interface IPreviewFile {
  file: File;
  width: number | 'auto';
  height: number | 'auto';
  deleteImg(idx: number): void;
  index: number;
}

const PreviewFile = ({
  file,
  width,
  height,
  deleteImg,
  index,
}: IPreviewFile) => {
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
        <RelWrap>
          <img
            src={preview}
            className="preview"
            alt="Preview"
            width={width}
            height={height}
          />
          <DeleteBtn
            title="Видалити зображення"
            onClick={() => {
              deleteImg(index);
            }}
          >
            <XIcon>x</XIcon>
          </DeleteBtn>
        </RelWrap>

        <PreviewLabel>{file.name}</PreviewLabel>
      </PreviewContainer>
    );
  }

  return null;
};

export default PreviewFile;
