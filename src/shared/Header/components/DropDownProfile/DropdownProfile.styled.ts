import { MutableRefObject } from 'react';
import styled from 'styled-components';

type Props = {
  modalRef: MutableRefObject<undefined>;
}

export const DropdownContainer = styled.div<Props>`
  position: absolute;
  bottom: -20px;
  right: 0;
  transform: translateY(100%);
  background-color: white;
  border-radius: 15px;
  width: 120px;
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 15px;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 20px;
    width: 17px;
    height: 17px;
    transform: rotate(45deg);
    background-color: white;
    border: none;
  }
`;

export const ListOfItems = styled.ul`
  list-style-type: none;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  cursor: pointer;
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
