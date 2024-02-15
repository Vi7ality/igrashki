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
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: 0.3s;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthBtn = styled.button`
font-weight: ${props => props.theme.fontWeights.medium};
font-size: 16px;
line-height: 1.185;

display: flex;
align-items: center;
text-align: center;
color: ${props => props.theme.colors.white};
border: 2px solid 
${props => props.theme.colors.white};
border-radius: 30px;
padding: 10px 30px;

svg {
  width: 28px;
  height: 28px;
  margin-right: 10px;
}
`

export const BasketBtn = styled.button`
padding: 10px;
background-color: 
${props => props.theme.colors.white};
border-radius: 50%;
width: 48px;
height: 48px;
svg {
  width: 28px;
  height: 28px;
}
`
