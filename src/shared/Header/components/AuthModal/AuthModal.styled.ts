import styled from "styled-components";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

export const BackdropWrap = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.darkBlue}80;
  /* background-color: rgba(0, 0, 0, 0.8); */
`;

export const FormWrap = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px;
  box-shadow: 0 6px 25px 0 rgba(63, 73, 148, 0.2);
  border-radius: 15px;
  text-align: center;
  width: 370px;

  @media ${(props) => props.theme.device.tablet} {
    width: 446px;
    padding: 20px 30px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const LogoStyled = styled.img`
  width: 38px;
  height: 35px;

  @media ${(props) => props.theme.device.tablet} {
    width: 45px;
    height: 42px;
  }
`;

export const IconClose = styled.svg`
  width: 28px;
  height: 28px;
`;

export const FormTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const InputMaskStyled = styled(InputMask)`
  border-radius: 20px;
  border: none;
  padding: 15px 23px 15px 20px;
  background-color: ${(props) => props.theme.colors.bgWhite};
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  margin-bottom: 20px;
`;

export const InputStyled = styled.input`
  border-radius: 20px;
  border: none;
  padding: 15px 23px 15px 20px;
  background-color: ${(props) => props.theme.colors.bgWhite};
  color: ${(props) => props.theme.colors.darkBlue};
  margin-bottom: 30px;
  width: 100%;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.accent};
  border-radius: 20px;
  width: 100%;
  height: 48px;

  font-size: 16px;
  font-weight: 600;

  margin-bottom: 10px;
`;

export const RegisterLink = styled(Link)`
  padding: 15px 23px;
  width: 100%;
  height: 48px;

  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: ${(props) => props.theme.colors.baseBlue};
`;
