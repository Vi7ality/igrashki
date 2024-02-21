import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg from "../../assets/footer-bg.svg";

export const FooterTopStyled = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
  padding-bottom: 65px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 43px;
    padding-bottom: 27px;
  }

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 57px;
    padding-bottom: 23px;
  }
`;

export const FlexWrapTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding-bottom: 24px;
  align-items: start;

  @media ${(props) => props.theme.device.tablet} {
    align-items: center;
    padding-bottom: 38px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-bottom: 30px;
  }

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #655fbd;
    position: absolute;
    bottom: 0;
  }
`;

export const Logo = styled.img`
  width: 53px;

  @media ${(props) => props.theme.device.desktop} {
    width: 70px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 78px;
  margin-right: -45px;

  @media ${(props) => props.theme.device.tablet} {
    margin-top: 0;
    margin-right: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }

  @media ${(props) => props.theme.device.desktop} {
    gap: 60px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.white};
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
  height: 36px;
`;

export const FlexWrapBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 20px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    padding-top: 46px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 45px;
  }
`;

export const TermsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;

export const TermsLink = styled.a`
  color: ${(props) => props.theme.colors.bgWhite};
`;
export const ContactLink = styled.a`
  font-size: 18px;
  font-weight: ${(props) => props.theme.colors.bold};
  color: ${(props) => props.theme.colors.bgWhite};
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    gap: 40px;
  }
`;

export const CopyrightStyled = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.mutedWhite};
  text-align: center;

  margin-top: 60px;

  @media ${(props) => props.theme.device.tablet} {
    margin-top: 44px;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin-top: 57px;
  }
`;
