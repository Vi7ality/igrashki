import { ChangeEventHandler } from "react";
import { InputStyled, InputWrap, LabelStyled, PhoneInput } from "./InputField.styled";

type PropType = {
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
};

const InputField = ({
  label,
  type,
  name,
  placeholder,
  value,
  disabled = false,
  onChange,
}: PropType) => {
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
        />
      ) : (
        <InputStyled
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </InputWrap>
  );
};

export default InputField;
