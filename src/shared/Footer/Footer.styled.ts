import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../Container";
import bgImg from './assets/footer-bg.svg'

export const FooterTop = styled.div`
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
  color: #fff;
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
color: #F3F3FF;
`
export const ContactLink = styled.a`
font-size: 18px;
font-weight: 700;
color: #F3F3FF;
`

export const ContactList = styled.ul`
display: flex;
gap: 40px; 
`

export const CopyrightStyled = styled.p`
font-size: 14px;
color: #8F8ACD;
text-align: center;

margin-top: 58px;
`

export const FooterBottom = styled.div`
padding-top: 48px;
padding-bottom: 53px;
background-color: #100E20;
`

export const FlexContainer = styled(Container)`
display: flex;`

export const IconList = styled.ul`
display: flex;
gap: 30px;
margin-right: 30px;
` 
export const TeplitsiaIco = styled.svg`
width: 93px;
height: 37px;
`
export const GrowWithYouIco = styled.svg`
width: 42px;
height: 38px;
`
export const UnicefIco = styled.svg`
width: 131px;
height: 32px;
`
export const TextStyled = styled.p`
width: 970px;
font-size: 12px;
color: #70728F;
`



