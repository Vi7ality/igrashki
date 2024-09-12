import styled from 'styled-components';

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
  background-color: ${props => props.theme.colors.darkBlue}80;
`;

export const FormWrap = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  box-shadow: 0 6px 25px 0 rgba(63, 73, 148, 0.2);
  border-radius: 15px;
  text-align: center;
  width: 370px;

  @media ${props => props.theme.device.tablet} {
    width: 446px;
    padding: 20px 30px;
  }
`;

export const IconClose = styled.svg`
  width: 28px;
  height: 28px;
`;

export const CloseBtn = styled.button`
  float: right;
  cursor: pointer;
  margin-left: 10px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 20px;
  padding: 0 100px;
`;

export const DialogueBtn = styled.button`
  line-height: 1.3;
  color: ${props => props.theme.colors.baseBlue};
  font-weight: 600;
  font-size: 18px;
  transition: color
    ${p => p.theme.transition.function && p.theme.transition.duration};
  @media (hover: hover) {
    &:hover {
      color: ${p => p.theme.colors.altBlue};
    }
  }
  @media (hover: none) {
    &:active {
      color: ${p => p.theme.colors.altBlue};
    }
  }
`;
