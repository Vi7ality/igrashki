import styled from "styled-components";
import InputMask from "react-input-mask";

export const InputWrap = styled.div`
display: flex;
flex-direction: column;

margin-bottom: 20px;
`

export const LabelStyled = styled.label`
font-size: 14px;
margin-bottom: 5px;
`

export const InputStyled = styled.input`
outline: none;
border: none;
border-radius: 20px;
padding: 15px 23px 15px 20px;
background-color: ${p => p.theme.colors.bgWhite};
color: ${p => p.theme.colors.darkBlue};
`

export const PhoneInput = styled(InputMask)`
outline: none;
border: none;
border-radius: 20px;
padding: 15px 23px 15px 20px;
background-color: ${p => p.theme.colors.bgWhite};
color: ${p => p.theme.colors.darkBlue};
`