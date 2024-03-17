import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { IClientCredentials } from "../../../../models/client";
import { clientLogin } from "../../../../redux/slices/client.slice";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa6";
import {
  FormWrap,
  BackdropWrap,
  FlexWrap,
  LogoStyled,
  IconClose,
  FormTitle,
  InputMaskStyled,
  InputStyled,
  ShowPasswordBtn,
  SubmitBtn,
  RegisterLink,
  PswrdInputWrap,
  PhoneInputWrap,
  ReqMsg,
} from "./AuthModal.styled";
import icons from "../../../../assets/icons.svg";
import logo from "../../../../assets/logo-dark.svg";

interface AuthModalProps {
  authClose: () => void;
}

interface LoginForm {
  phoneNumber: string;
  password: string;
}

const AuthModal = ({ authClose }: AuthModalProps) => {
  const dispatch = useAppDispatch();
  const { client, error } = useAppSelector((state) => state.client);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (client) {
      authClose();
    }
  }, [client, authClose]);

  const handleLogin = (data: IClientCredentials) => { 
    dispatch(clientLogin(data));
  };

  return (
    <BackdropWrap onClick={authClose}>
      <FormWrap onClick={(e) => e.stopPropagation()}>
        <FlexWrap>
          <LogoStyled src={logo} alt="Лого"></LogoStyled>
          <button onClick={authClose}>
            <IconClose>
              <use href={`${icons}#icon-close`} />
            </IconClose>
          </button>
        </FlexWrap>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <FormTitle>Авторизація</FormTitle>
            {error && <h6>Недійсні облікові дані</h6>}
          </div>
          <PhoneInputWrap>
            <InputMaskStyled
              mask="+38 (999) 999 99 99"
              placeholder="+380"
              maskChar={null}
               {...errors.phoneNumber && {isInvalid: true}}
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && <ReqMsg>Це поле обов'язкове</ReqMsg>}
          </PhoneInputWrap>
          <PswrdInputWrap>
            <div style={{position: 'relative'}}>
              <InputStyled
              type={showPassword ? "text" : "password"}
                placeholder="Введіть пароль "
            {...errors.password && {isInvalid: true}}
              {...register("password", { required: true })}
            />
            <ShowPasswordBtn type="button" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <FaEyeSlash style={{ color: "grey", width: "24px", height: "24px" }} />
              ) : (
                <AiFillEye style={{ width: "24px", height: "24px" }} />
              )}
            </ShowPasswordBtn>
            </div>
            {errors.password && <ReqMsg>Це поле обов'язкове</ReqMsg>}
          </PswrdInputWrap>
          <SubmitBtn type="submit">Увійти</SubmitBtn>
          <RegisterLink to={"/subscription"} onClick={authClose}>Зареєструватися</RegisterLink>
        </form>
      </FormWrap>
    </BackdropWrap>
  );
};

export default AuthModal;
