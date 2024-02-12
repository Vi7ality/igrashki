import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg from '../../assets/footer-bg.svg'

export const FooterTopStyled = styled.div`
background-image: url(${bgImg});

padding-top: 57px;
padding-bottom: 23px;
`

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`;

export const FlexWrapTop = styled(FlexWrap)`
position: relative;
padding-bottom: 32px;
margin-bottom: 46px;

&:after {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #655FBD;
  position: absolute;
  bottom: 0;

}
`

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
  line-height: 1.1875;
  font-weight: 600;
  transition: 0.3s;
`;

export const ContainerRight = styled.ul`
  display: flex;
  align-items: center;
  gap: 27px;
`;

export const IconStyled = styled.svg`
width: 36px;
height: 36px;`

export const TermsList = styled.ul`
display: flex; 
gap: 26px;
`

export const TermsLink = styled.a`
color: ${props => props.theme.colors.bgWhite};
`
export const ContactLink = styled.a`
font-size: 18px;
font-weight: ${props => props.theme.colors.bold};
color: ${props => props.theme.colors.bgWhite};
`

export const ContactList = styled.ul`
display: flex;
gap: 40px; 
`

export const CopyrightStyled = styled.p`
font-size: 14px;
color: ${props => props.theme.colors.mutedWhite};
text-align: center;

margin-top: 58px;
`