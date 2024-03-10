import styled from "styled-components";
import Container from "../Container";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 19px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 24px;
  }
`;
export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const FlexWrap = styled.div`
  display: flex;
`;

export const MobMenuBtn = styled.button`
  width: 28px;
  height: 28px;

  margin-right: 30px;


  @media ${(props) => props.theme.device.tablet} {
    display: none;
  }
`;

export const MenuIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  width: 39px;

  @media ${(props) => props.theme.device.desktop} {
    width: 56px;
  }
  
`;

export const NavContainer = styled.nav`
  display: none;

  @media ${(props) => props.theme.device.tablet} {
  display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  transition: 0.3s;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: start;
  gap: 15px;

  @media ${(props) => props.theme.device.tablet} {
    gap: 20px;
  } 
`;

export const AuthBtn = styled.button`

  @media ${(props) => props.theme.device.desktop} {
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: 16px;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 10px 30px;
  width: 200px;
  height: 48px;
  }

`;


export const MobUserIcon = styled.svg`
padding: 6px;
width: 28px;
height: 28px;
background-color: ${(props) => props.theme.colors.white};
border-radius: 50%;

  @media ${(props) => props.theme.device.tablet} {
    padding: 8px;
    width: 36px;
    height: 36px;
  }

  @media ${(props) => props.theme.device.desktop} {
    display: none;
  }
`
export const DeskUserIcon = styled.svg`
display: none;
@media ${(props) => props.theme.device.desktop} {
    display: block;
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`

export const AuthContent = styled.p`
display: none;
@media ${(props) => props.theme.device.desktop} {
    display: inline;
  }
`

export const BasketBtn = styled.button`
  padding: 5px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  width: 28px;
  height: 28px;

  position: relative;

    @media ${(props) => props.theme.device.tablet} {
    padding: 7px;
    width: 36px;
    height: 36px;
  }
    @media ${(props) => props.theme.device.desktop} {
  padding: 9px;
    width: 48px;
    height: 48px;
  }

  svg {
    width: 17px;
    height: 17px;
      @media ${(props) => props.theme.device.tablet} {
    width: 21px;
    height: 21px;
  }
    @media ${(props) => props.theme.device.desktop} {
    width: 28px;
    height: 28px;
  }
  }

  P {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #FF391E;
    color: #fff;
    font-weight: 12px;

    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
