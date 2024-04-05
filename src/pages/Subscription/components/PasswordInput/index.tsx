import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";
import {
  InputWrap,
  InputStyled,
  LabelStyled,
  RelativeWrap,
  ShowPasswordBtn,
  AlertMsg,
} from "./PasswordInput.styled";
import { ClientState } from "../../../../models/auth";
import { ErrorMessage } from "formik";

type PropType = {
  clientValues: ClientState;
  setClientValues(clientValues: ClientState): void;
  error?: any;
  touched?: boolean;
  getFieldProps: any;
};

const PasswordInput = ({ error, touched, getFieldProps }: PropType) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputWrap>
      <LabelStyled htmlFor="password">Пароль</LabelStyled>
      <RelativeWrap>
        <InputStyled
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Пароль"
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
      </RelativeWrap>
      <ErrorMessage name="password">{(msg) => <AlertMsg>{msg}</AlertMsg>}</ErrorMessage>
    </InputWrap>
  );
};

export default PasswordInput;
