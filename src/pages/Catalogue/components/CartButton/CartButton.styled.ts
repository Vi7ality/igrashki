import styled from 'styled-components';

type BtnProps = {
    isItemInCart: boolean;
}

export const ButtonStyled = styled.button<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${p => p.isItemInCart ? p.theme.colors.bgWhite : p.theme.colors.accent};
  width: 36px;
  height: 36px;

  :hover&:focus {
    background-color: ${p => p.isItemInCart ? p.theme.colors.redAlt : p.theme.colors.accentAlt};
  }
`;

export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
