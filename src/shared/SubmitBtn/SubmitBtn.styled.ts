import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 20px;
  width: 50%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  margin-left: auto;
  margin-right: auto;
  transition: background-color
    ${p => p.theme.transition.function && p.theme.transition.duration};

  @media (hover: hover) {
    &:hover {
      background-color: ${p => p.theme.colors.accentAlt};
    }
  }
  @media (hover: none) {
    &:active {
      background-color: ${p => p.theme.colors.accentAlt};
    }
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightGrey};
    color: ${props => props.theme.colors.mutedGrey2};
  }
`;
