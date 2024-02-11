import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../Container";
import bgImg from './assets/footer-bg.svg'

export const FooterTop = styled.div`
background-image: url(${bgImg});

padding-top: 57px;
padding-bottom: 23px;
`

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