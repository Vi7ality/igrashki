import styled from "styled-components";
import { AccentLinkStyled } from "../../../../pages/AboutUs/components/JoinUsSection/JoinUsSection.styled";
import { Link } from "react-router-dom";

export const CartModalContainer = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
  top: 45px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 6px 25px 0 rgba(63, 73, 148, 0.2);
  padding: 20px;
  border-radius: 15px;
  width: 100%;

  @media ${(props) => props.theme.device.tablet} {
      width: 446px;
      top: 50px;
      right: 20px;
      padding: 20px 30px;
  }

  @media ${(props) => props.theme.device.desktop} {
    top: 63px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ItemCounter = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.baseBlue};

  span {
    font-weight: 700;
    margin-left: 14px;
  }
`;

export const IconClose = styled.svg`
  width: 28px;
  height: 28px;
`;

export const CartList = styled.ul`
  margin-top: 30px;
`;

export const CartItem = styled.li`
  padding-bottom: 20px;

  &:not(:first-child) {
    margin-top: 20px;
  }

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

export const LinkBtnContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;
`;

export const ClearBtn = styled.button`
  font-weight: 600;
  width: 124px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.baseBlue};
  border: 2px solid ${(props) => props.theme.colors.baseBlue};
  border-radius: 20px;

  @media ${(props) => props.theme.device.tablet} {
    width: 142px;
  }
`;

export const BagLink = styled(AccentLinkStyled)`
font-size: 16px;
  width: 194px;
  height: 48px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 16px;
    width: 234px;
    height: 48px;
  }
  @media ${(props) => props.theme.device.desktop} {
    font-size: 16px;
    width: 234px;
    height: 48px;
  }
`;

export const EmptyCartMsg = styled.p`
font-size: 18px;
margin-top: 30px;
`

export const CatalogueLink = styled(Link)`
display: inline;
font-weight: 600;
`
