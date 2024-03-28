import styled from "styled-components";

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

export const InputStyled = styled.input`
  outline: none;
  border: none;
  border-radius: 20px;
  padding: 15px 23px 15px 20px;
  background-color: ${(p) => p.theme.colors.bgWhite};
  color: ${(p) => p.theme.colors.darkBlue};
    width: 100%;
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
