import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: background-color
    ${p => p.theme.transition.function && p.theme.transition.duration};
  width: 36px;
  height: 36px;

  &.add {
    background-color: ${({ theme: { colors } }) => colors.accent};
    @media (hover: hover) {
      &:hover {
        color: ${p => p.theme.colors.accentAlt};
      }
    }
    @media (hover: none) {
      &:active {
        background-color: ${p => p.theme.colors.accentAlt};
      }
    }
  }
  &.delete {
    background-color: ${({ theme: { colors } }) => colors.bgWhite};
    @media (hover: hover) {
      &:hover {
        background-color: ${p => p.theme.colors.redAlt};
      }
    }
    @media (hover: none) {
      &:active {
        background-color: ${p => p.theme.colors.redAlt};
      }
    }
  }
`;

export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
