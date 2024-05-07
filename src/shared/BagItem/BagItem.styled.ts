import { Link } from "react-router-dom";
import styled from "styled-components";

export const BagItemStyled = styled.li`
  padding-bottom: 20px;

  &::after {
    content: "";
    position: relative;
    display: block;
    bottom: -20px;
    left: 0;
    width: 100%;
    height: 1px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapLeft = styled(Link)`
  display: flex;
  align-items: center;
`;

export const ItemImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  margin-right: 20px;

  @media ${(props) => props.theme.device.tablet} {
    width: 120px;
    height: 120px;
    border-radius: 30px;
    margin-right: 40px;
  }
`;

export const ItemName = styled.p`
color: ${p => p.theme.colors.darkBlue};
  @media ${(p) => p.theme.device.tablet} {
    font-size: 18px;
  }
`;

export const TrashIcon = styled.svg`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.bgWhite};
  padding: 7px;

  @media ${(props) => props.theme.device.tablet} {
    width: 48px;
    height: 48px;
    padding: 10px;
  }
`;
