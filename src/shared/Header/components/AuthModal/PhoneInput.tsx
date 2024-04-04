import { ErrorMessage } from "formik";
import { InputMaskStyled, PhoneInputWrap, AlertMsg } from "./AuthModal.styled";

type PropType = {
  getFieldProps: any;
  error: string | undefined;
  touched: boolean | undefined;
};

export const PhoneInput = ({ getFieldProps, error, touched }: PropType) => {
  return (
    <PhoneInputWrap>
      <InputMaskStyled
        mask="+38 (999) 999 99 99"
        placeholder="+38"
        maskChar={null}
        autocomplete="username"
        {...getFieldProps("phoneNumber")}
        {...(error && touched && { isInvalid: true })}
      />
      <ErrorMessage name="phoneNumber">{(msg) => <AlertMsg>{msg}</AlertMsg>}</ErrorMessage>
    </PhoneInputWrap>
  );
};
