import { ErrorMessage, FormikValues } from 'formik';
import PreviewFile from '../PreviewFile';
import {
  BtnLabel,
  BtnWrap,
  DeleteBtn,
  Ext,
  FlexCont,
  Input,
  PreviewRelWrap,
} from './UploadFileBtn.styled';
import { nanoid } from 'nanoid';
import { ChangeEvent } from 'react';
import { getAllowedExt } from '../../utils/validationSchemas/toyValidationSchema';

interface IUploadFileBtn {
  inputName: string;
  values: FormikValues;
  setFieldValue: (field: string, value: any) => void;
}

const UploadFileField = ({
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

    const updatedFiles = existingFiles.filter((_, i: number) => i !== index);

    setFieldValue(inputName, updatedFiles);
  };

  return (
    <>
      <BtnWrap>
        <BtnLabel htmlFor={inputName}>
          <span>Вибрати файли</span>
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
            values.map((file: File, index: number) => (
              <div key={nanoid(8)}>
                <PreviewFile
                  width={50}
                  height={'auto'}
                  file={file}
                  deleteImg={handleDeleteImage}
                  index={index}
                />
                {/* <DeleteBtn
                  onClick={() => {
                    handleDeleteImage(index);
                  }}
                >
                  Delete
                </DeleteBtn> */}
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

export default UploadFileField;
