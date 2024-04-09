import styled from 'styled-components';

type BtnProps = {
    isitemincart: boolean;
}

export const ButtonStyled = styled.button<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: background-color ${p => p.theme.transition.function && p.theme.transition.duration.standart};
  background-color: ${p => p.isitemincart ? p.theme.colors.bgWhite : p.theme.colors.accent};
  width: 36px;
  height: 36px;

  &:hover {
    background-color: ${p => p.isitemincart ? p.theme.colors.redAlt : p.theme.colors.accentAlt};
  }

  &:focus {
    background-color: ${p => p.isitemincart ? p.theme.colors.redAlt : p.theme.colors.accentAlt};
  }
`;

export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
