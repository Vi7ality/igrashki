import styled from "styled-components";
import Container from "../Container";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
`;
export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 56px;
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 100px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  line-height: 1.1875;
  font-weight: 600;
  transition: 0.3s;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthBtn = styled.button`
font-weight: 600;
font-size: 16px;
line-height: 1.185;

display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
border: 2px solid 
#FFFFFF;
border-radius: 30px;
padding: 15px 32px;

svg {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
`

export const BasketBtn = styled.button`
padding: 10px;
background-color: 
#FFFFFF;
border-radius: 50%;
width: 48px;
height: 48px;
svg {
  width: 28px;
  height: 28px;
}
`
