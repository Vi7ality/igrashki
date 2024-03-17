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
  AlertMsg
} from "./AuthModal.styled";
import icons from "../../../../assets/icons.svg";
import logo from "../../../../assets/logo-dark.svg";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

interface AuthModalProps {
  authClose: () => void;
}

const loginValidationSchema = Yup.object({
  phoneNumber: Yup.string().required("Це поле обов'язкове").min(19, "Веедіть корректний номер телефону"),
  password: Yup.string().required("Це поле обов'язкове"),
});

const AuthModal = ({ authClose }: AuthModalProps) => {
  const dispatch = useAppDispatch();
  const { client, error } = useAppSelector((state) => state.client);
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
    console.log(data)
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
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <FormTitle>Авторизація</FormTitle>
                  {error && <h6>Недійсні облікові дані</h6>}
                </div>
                <PhoneInputWrap>
                  <InputMaskStyled
                    mask="+38 (999) 999 99 99"
                    placeholder="+380"
                    maskChar={null}
                    {...getFieldProps('phoneNumber')}
                    {...(errors.phoneNumber && touched.phoneNumber && { isInvalid: true })}
                  />
                  <ErrorMessage name="phoneNumber">{(msg) => <AlertMsg>{msg}</AlertMsg>}</ErrorMessage>
                </PhoneInputWrap>
                <PswrdInputWrap>
                  <div style={{ position: "relative" }}>
                    <InputStyled
                      type={showPassword ? "text" : "password"}
                      placeholder="Введіть пароль "
                      {...getFieldProps('password')}
                      {...(errors.password && touched.password && { isInvalid: true })}
                    />
                    <ShowPasswordBtn type="button" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEyeSlash style={{ color: "grey", width: "24px", height: "24px" }} />
                      ) : (
                        <AiFillEye style={{ width: "24px", height: "24px" }} />
                      )}
                    </ShowPasswordBtn>
                  </div>
                  <ErrorMessage name="password">{(msg) => <AlertMsg>{msg}</AlertMsg>}</ErrorMessage>
                </PswrdInputWrap>
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
