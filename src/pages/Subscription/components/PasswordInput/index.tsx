import { FormEvent, useState } from "react";
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
import { ClientValuesType } from "../../../../models/auth";
import { ErrorMessage, FormikTouched } from "formik";

type PropType = {
  clientValues: ClientValuesType;
  setClientValues(clientValues: ClientValuesType): void;
  error?: any;
  touched?: boolean;
  getFieldProps: any;
};

const PasswordInput = ({
  clientValues,
  setClientValues,
  error,
  touched,
  getFieldProps,
}: PropType) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <InputWrap>
      <LabelStyled htmlFor="password">Пароль</LabelStyled>
      <RelativeWrap>
        <InputStyled
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Пароль"
          value={clientValues.password}
          onChange={(e: any) => setClientValues({ ...clientValues, password: e.target.value })}
          {...getFieldProps("password")}
          {...(error && touched && { isInvalid: true })}
        />
        <ShowPasswordBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <FaEyeSlash style={{ color: "grey", width: "24px", height: "24px" }} />
          ) : (
            <AiFillEye style={{ width: "24px", height: "24px" }} />
          )}
        </ShowPasswordBtn>
      </RelativeWrap>
      <ErrorMessage name="password">{(msg) => <AlertMsg>{msg}</AlertMsg>}</ErrorMessage>
    </InputWrap>
  );
};

export default PasswordInput;

{
  /* <InputField
        label="Пароль"
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Пароль"
        value={clientValues.password}
        onChange={(e: any) => setClientValues({ ...clientValues, password: e.target.value })}
        /> */
}
