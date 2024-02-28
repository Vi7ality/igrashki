import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobileMenuSection = styled.section`
  box-sizing: border-box;
  position: fixed;
  padding-right: 12px;
  padding-left: 12px;
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 100%;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transform: translateY(-100%);

  z-index: 999;
  opacity: 1;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.open {
    transform: translateY(0%);
    opacity: 1;
    height: 100vh;
    width: 100vw;
    visibility: visible;
  }
`;

export const HeaderMb = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 29px;
`;

export const FlexWrap = styled.div`
  display: flex;
`;

export const IconClose = styled.svg`
  width: 28px;
  height: 28px;

  margin-right: 30px;
`;

export const AuthContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 44px;
`

export const RegisterLink = styled(NavLink)`
font-size: 18px;
padding-left: 20px;
border-left: 2px solid #D8DEFB
;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const NavLinkStyled = styled(NavLink)`
font-size: 18px;
font-weight: 700;
`

export const SocialMediaList = styled.ul`
display: flex;
justify-content: center;
gap: 27px;
`
export const IconSocial = styled.svg`
width: 36px;
height: 36px;
fill: ${props => props.theme.colors.baseBlue};
`