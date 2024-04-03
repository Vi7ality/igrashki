import styled from "styled-components";

interface InputProps {
  isInvalid?: boolean;
}

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const LabelStyled = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const RelativeWrap = styled.div`
  position: relative;
`;

export const InputStyled = styled.input<InputProps>`
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 15px 23px 15px 20px;
  background-color: ${(p) => p.theme.colors.bgWhite};
  color: ${(p) => p.theme.colors.darkBlue};
    width: 100%;

      border: ${p => p.isInvalid ? '2px solid #FF6157' : 'none'};

    &:focus {
      border: 2px solid ${p => p.theme.colors.borderGrey};
    }
`;

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

export const AlertMsg = styled.p`
font-size: 14px;
text-align: start;
color: ${p => p.theme.colors.warnRed};
margin-top: 5px;
`
