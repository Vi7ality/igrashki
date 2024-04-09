import styled from 'styled-components';

type stylesProps = {
  [key: string]: string;
};

export const CategoryWrapper = styled.div`
  position: relative;
  cursor: pointer;
  @media ${p => p.theme.device.mobileOnly} {
    width: 100%;
  }
`;
export const Input = styled.input<stylesProps>`
  display: block;
  border-radius: 30px;
  padding: 15px 44px 15px 20px;
  width: 100%;
  background-color: ${p => p.backgroundcolor || p.theme.colors.white};
  height: 48px;
  border: none;
  outline: transparent;
  cursor: pointer;

  @media ${p => p.theme.device.tablet} {
    width: ${p => p.widthtablet || '350px'};
  }
  @media ${p => p.theme.device.desktop} {
    width: ${p => p.widthdesktop || '350px'};
  }

  &::placeholder {
    font-size: 16px;
    color: ${p => p.theme.colors.darkBlue};
  }
`;

export const OptionWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  height: 19px;
  color: ${p => p.theme.colors.text};
`;

export const WrapperArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: ${p => p.theme.colors.baseBlue};
  width: 20px;
  height: 20px;
`;
export const SelectInput = styled.input`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: ${p => p.theme.colors.text};
  opacity: 50%;
  overflow-y: auto;
  max-height: 120px;
  border: none;
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;
export const StyledSelect = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  padding-top: 3px;
  width: 100%;
  height: 100%;
  justify-content: right;
  gap: 13px;
  font-size: 12px;

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;

export const SelectContainer = styled.ul<stylesProps>`
  position: absolute;
  z-index: 9;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  top: 48px;
  right: 0;
  width: 100%;
  font-size: 16px;
  padding: 15px 20px;
  background-color: ${p => p.backgroundColor || p.theme.colors.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  gap: 15px;

  visibility: hidden;
  opacity: 0;
  transition: opacity
      ${({
        theme: {
          transition: { duration, function: transitionFunction },
        },
      }) => `${duration} ${transitionFunction}`},
    visibility
      ${({
        theme: {
          transition: { duration, function: transitionFunction },
        },
      }) => `${duration} ${transitionFunction}`};

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const SelectItem = styled.li`
  font-weight: ${props => props.theme.fontWeights.normal};
  cursor: pointer;
  transition: color
    ${({
      theme: {
        transition: { duration, function: transitionFunction },
      },
    }) => `${duration} ${transitionFunction}`};
  &:hover {
    color: ${props => props.theme.colors.accent};
  }

  &.selected {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;
