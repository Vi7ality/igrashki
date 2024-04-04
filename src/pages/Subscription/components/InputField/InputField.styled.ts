import styled from "styled-components";
import InputMask from "react-input-mask";

interface InputProps {
  isInvalid?: boolean;
}

export const InputWrap = styled.div`
display: flex;
flex-direction: column;

margin-bottom: 20px;
`

export const LabelStyled = styled.label`
font-size: 14px;
margin-bottom: 5px;
`

export const InputStyled = styled.input<InputProps>`
outline: none;
border: none;
border-radius: 20px;
padding: 15px 23px 15px 20px;
background-color: ${p => p.theme.colors.bgWhite};
color: ${p => p.theme.colors.darkBlue};
 border: ${p => p.isInvalid ? '2px solid #FF6157' : 'none'};

    &:focus {
      border: 2px solid ${p => p.theme.colors.borderGrey};
    }
`

export const PhoneInput = styled(InputMask)<InputProps>`
outline: none;
border: none;
border-radius: 20px;
padding: 15px 23px 15px 20px;
background-color: ${p => p.theme.colors.bgWhite};
color: ${p => p.theme.colors.darkBlue};

border: ${p => p.isInvalid ? '2px solid #FF6157' : 'none'};

    &:focus {
      border: 2px solid ${p => p.theme.colors.borderGrey};
    }
`

export const AlertMsg = styled.p`
font-size: 14px;
text-align: start;
color: ${p => p.theme.colors.warnRed};
margin-top: 5px;
`