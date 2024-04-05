import { useState } from "react";
import { AlertMsg, InputStyled, PswrdInputWrap, ShowPasswordBtn } from "./AuthModal.styled";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";
import { ErrorMessage } from "formik";

type PropType = {
  getFieldProps: any;
  error: string | undefined;
  touched: boolean | undefined;
};

export const PasswordInput = ({ getFieldProps, error, touched }: PropType) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <PswrdInputWrap>
      <div style={{ position: "relative" }}>
        <InputStyled
          autoComplete="true"
          type={showPassword ? "text" : "password"}
          placeholder="Введіть пароль"
          autocomplete="current-password"
          {...getFieldProps("password")}
          {...(error && touched && { isInvalid: true })}
        />
        <ShowPasswordBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <AiFillEye style={{ width: "24px", height: "24px" }} />
          ) : (
            <FaEyeSlash style={{ color: "grey", width: "24px", height: "24px" }} />
          )}
        </ShowPasswordBtn>
      </div>
      <ErrorMessage name="password">{(msg) => <AlertMsg>{msg}</AlertMsg>}</ErrorMessage>
    </PswrdInputWrap>
  );
};
