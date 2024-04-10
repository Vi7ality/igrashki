import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: background-color
    ${p => p.theme.transition.function && p.theme.transition.duration.standart};
  width: 36px;
  height: 36px;

  &.add {
    background-color: ${({ theme: { colors } }) => colors.accent};
    &:hover {
      background-color: ${p => p.theme.colors.accentAlt};
    }

    &:focus {
      background-color: ${p => p.theme.colors.accentAlt};
    }
  }
  &.delete {
    background-color: ${({ theme: { colors } }) => colors.bgWhite};
    &:hover {
      background-color: ${p => p.theme.colors.redAlt};
    }

    &:focus {
      background-color: ${p => p.theme.colors.redAlt};
    }
  }
`;

export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
