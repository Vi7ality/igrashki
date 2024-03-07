import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobileMenuSection = styled.section`
  box-sizing: border-box;
  position: fixed;
  background-color: white;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 100%;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transform: translateY(-100%);

  z-index: 99;
  opacity: 1;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.open {
    transform: translateY(0%);
    opacity: 1;
    height: 100vh;
    width: 100vw;
    overflow: auto;
    visibility: visible;
  }

  @media ${props => props.theme.device.tablet} {
    display: none;
  }
`;

export const MenuContainer = styled.div`
  margin: 0 auto;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  @media ${props => props.theme.device.mobile} {
    width: 370px;
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

export const BagNavLink = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: 28px;
height: 28px;

fill: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.baseBlue};
border-radius: 50%;
`

export const IconBag = styled.svg`
width: 28px;
height: 28px;

padding: 5px;
`

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
`;

export const RegisterLink = styled(NavLink)`
  font-size: 18px;
  padding-left: 20px;
  border-left: 2px solid #d8defb;
  color: ${props => props.theme.colors.darkBlue};
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  margin-bottom: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.colors.darkBlue};
`;

export const LogoutBtn = styled.button`
border: none;
font-size: 18px;
color: ${props => props.theme.colors.red};
margin-bottom: 40px;
`

export const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 27px;

  margin-top: auto;
  margin-bottom: 40px;
`;
export const IconSocial = styled.svg`
  width: 36px;
  height: 36px;
  fill: ${(props) => props.theme.colors.baseBlue};
`;

export const MenuBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  &::before {
    content: "";
    width: 100%;
    height: 2px;

    background-color: #d8defb;
    border-radius: 16px;
  }
`;
export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContactLink = styled.a`
  font-weight: 600;
  color: ${(props) => props.theme.colors.darkBlue};
`;

export const UserTerms = styled.a`
color: ${props => props.theme.colors.darkBlue};
padding-bottom: 15px;
`
