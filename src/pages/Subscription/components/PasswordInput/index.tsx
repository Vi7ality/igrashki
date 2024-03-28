import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";
import { InputWrap, InputStyled, LabelStyled, RelativeWrap, ShowPasswordBtn } from "./PasswordInput.styled";
import { ClientValuesType } from "../../../../models/auth";

type PropType = {
  clientValues: ClientValuesType;
  setClientValues(clientValues: ClientValuesType): void;
};

const PasswordInput = ({ clientValues, setClientValues }: PropType) => {
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
        />
        <ShowPasswordBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <FaEyeSlash style={{ color: "grey", width: "24px", height: "24px" }} />
          ) : (
            <AiFillEye style={{ width: "24px", height: "24px" }} />
          )}
        </ShowPasswordBtn>
      </RelativeWrap>
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
