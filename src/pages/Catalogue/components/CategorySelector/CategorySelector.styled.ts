import styled from 'styled-components';

type SelectItemProps = {
  isSelected: boolean;
};

type selectorStylesProp = {
  selectorStyles: any;
};

export const CategoryWrapper = styled.div`
  position: relative;
  cursor: pointer;
  @media ${props => props.theme.device.tablet} {
  }
  @media ${props => props.theme.device.desktop} {
  }
`;
export const Input = styled.input<selectorStylesProp>`
  display: block;
  border-radius: 30px;
  padding: 15px 44px 15px 20px;

  width: 350px;
  height: 48px;
  border: none;
  outline: transparent;
  cursor: pointer;



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

export const SelectContainer = styled.ul`
  position: absolute;
  z-index: 9;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 48px;
  right: 0;
  width: 100%;
  font-size: 16px;
  padding: 15px 20px;
  background-color: ${p => p.theme.colors.white};
  @media ${props => props.theme.device.tablet} {
  }
`;
export const SelectItem = styled.li<SelectItemProps>`
  color: ${props =>
    props.isSelected ? props.theme.colors.accent : props.theme.colors.darkBlue};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;
