import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { IClientCredentials } from "../../../../models/client";
import { clientLogin } from "../../../../redux/slices/client.slice";
import { useEffect } from "react";
import {
  FormWrap,
  BackdropWrap,
  FlexWrap,
  LogoStyled,
  IconClose,
  FormTitle,
  SubmitBtn,
  RegisterLink,
  ClientErr,
} from "./AuthModal.styled";
import icons from "../../../../assets/icons.svg";
import logo from "../../../../assets/logo-dark.svg";
import { Formik } from "formik";
import { PhoneInput } from "./PhoneInput";
import { PasswordInput } from "./PasswordInput";
import { loginValidationSchema } from "../../../../utils/validationSchemas/authValidationSchema";

interface AuthModalProps {
  authClose: () => void;
}

const AuthModal = ({ authClose }: AuthModalProps) => {
  const dispatch = useAppDispatch();
  const { client, error } = useAppSelector((state) => state.client);


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
        <Formik
          initialValues={{ phoneNumber: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
        >
          {({ handleSubmit, getFieldProps, touched, errors }) => {
            console.log(errors)
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <FormTitle>Авторизація</FormTitle>
                  {error && <ClientErr>Недійсні облікові дані</ClientErr>}
                </div>
                <PhoneInput
                  getFieldProps={getFieldProps}
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                />
                <PasswordInput
                
                  getFieldProps={getFieldProps}
                  error={errors.phoneNumber}
                  touched={touched.phoneNumber}
                />
                <SubmitBtn type="submit">Увійти</SubmitBtn>
                <RegisterLink to={"/subscription"} onClick={authClose}>
                  Зареєструватися
                </RegisterLink>
              </form>
            );
          }}
        </Formik>
      </FormWrap>
    </BackdropWrap>
  );
};

export default AuthModal;
