import styled from "styled-components";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

interface InputProps {
  isInvalid?: boolean;
}

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

export const PhoneInputWrap = styled.div`
margin-bottom: 20px;
`

export const InputMaskStyled = styled(InputMask)<InputProps>`
  border-radius: 20px;
  outline: none;
  padding: 15px 23px 15px 20px;
  background-color: ${(props) => props.theme.colors.bgWhite};
  color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  border:  ${props => props.isInvalid ? '2px solid #FF6157' : 'none'};

      &:focus {
      border: 2px solid ${p => p.theme.colors.borderGrey};
    }
`;

export const PswrdInputWrap = styled.div`
margin-bottom: 30px;
`

export const InputStyled = styled.input<InputProps>`
  border-radius: 20px;
  outline: none;
  padding: 15px 23px 15px 20px;
  background-color: ${(props) => props.theme.colors.bgWhite};
  color: ${(p) => p.theme.colors.darkBlue};
  width: 100%;
    border: ${p => p.isInvalid ? '2px solid #FF6157' : 'none'};

    &:focus {
      border: 2px solid ${p => p.theme.colors.borderGrey};
    }
`;

export const AlertMsg = styled.p`
font-size: 14px;
text-align: start;
color: ${p => p.theme.colors.warnRed};
margin-top: 5px;
`

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 23px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  height: 24px;
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
