import { ChangeEventHandler, FormEvent } from "react";
import { AlertMsg, InputStyled, InputWrap, LabelStyled, PhoneInput } from "./InputField.styled";
import { ErrorMessage, FormikTouched } from "formik";

type PropType = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string | undefined;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
  error?: any;
  touched?: boolean;
  getFieldProps(name: string): object;
};

const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  disabled = false,
  onChange,
  error,
  touched,
  getFieldProps,
}: PropType) => {
  console.log(value);
  return (
    <InputWrap>
      <LabelStyled htmlFor={name}>{label}</LabelStyled>
      {type === "tel" ? (
        <PhoneInput
          placeholder="+38"
          mask="+38 (999) 999 99 99"
          maskChar={null}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...getFieldProps(name)}
          {...(error && touched && { isInvalid: true })}
        />
      ) : (
        <InputStyled
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...getFieldProps(name)}
          {...(error && touched && { isInvalid: true })}
        />
      )}
      <ErrorMessage name={name} component="div">
        {(msg) => <AlertMsg>{msg}</AlertMsg>}
      </ErrorMessage>
    </InputWrap>
  );
};

export default InputField;
