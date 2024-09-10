import { ErrorMessage, FormikValues } from 'formik';
import PreviewFile from '../PreviewFile';
import {
  BtnLabel,
  BtnWrap,
  Ext,
  FlexCont,
  Input,
} from './UploadFileBtn.styled';
import { nanoid } from 'nanoid';
import { ChangeEvent } from 'react';
import { getAllowedExt } from '../../utils/validationSchemas/toyValidationSchema';

interface IUploadFileBtn {
  inputName: string;
  values: FormikValues;
  setFieldValue: (field: string, value: any) => void;
}

const UploadFileBtn = ({
  inputName,
  values,
  setFieldValue,
}: IUploadFileBtn) => {
  const allowedExt = getAllowedExt('image');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.currentTarget.files || []);
    const existingFiles = values || [];
    const updatedFiles = [...existingFiles, ...newFiles];
    setFieldValue(inputName, updatedFiles);
  };

  const handleDeleteImage = (index: number) => {
    const existingFiles = values || [];

    const updatedFiles = existingFiles.filter((_, i) => i !== index);

    setFieldValue(inputName, updatedFiles);
  };

  return (
    <>
      <BtnWrap>
        <BtnLabel htmlFor={inputName}>
          <span>Upload {inputName}</span>
          <Ext>[{allowedExt}]</Ext>
        </BtnLabel>
        <Input
          id={inputName}
          name={inputName}
          type="file"
          multiple
          accept={allowedExt}
          onChange={handleFileChange}
        />
        <FlexCont>
          {values &&
            values.length > 0 &&
            values.map((file: File, index) => (
              <div key={nanoid(8)}>
                <PreviewFile
                  width={50}
                  height={'auto'}
                  file={file}
                  key={nanoid(8)}
                />
                <button
                  onClick={() => {
                    handleDeleteImage(index);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
        </FlexCont>
      </BtnWrap>
      <ErrorMessage name={inputName}>
        {msg => <p style={{ color: 'red' }}>{msg}</p>}
      </ErrorMessage>
    </>
  );
};

export default UploadFileBtn;
