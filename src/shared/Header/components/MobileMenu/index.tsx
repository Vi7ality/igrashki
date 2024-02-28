import { NavLink } from "react-router-dom";
import CartButton from "../CartButton";
import {
  AuthContainer,
  FlexWrap,
  HeaderMb,
  IconClose,
  IconSocial,
  MobileMenuSection,
  NavLinkStyled,
  NavList,
  RegisterLink,
  SocialMediaList,
} from "./MobileMenu.styled";
import icons from "../../../../assets/icons.svg";
import darkLogo from "../../../../assets/logo-dark.svg";
import { useEffect } from "react";

type Props = {
  handleMenuClick: void;
  openState: boolean;
}

const MobileMenu = ({ handleMenuClick, openState } : Props) => {

  useEffect(() => {
    if (openState) {
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [openState]);
  return (
    <MobileMenuSection className={openState ? "open" : ""}>
      <HeaderMb>
        <FlexWrap>
          <button onClick={handleMenuClick}>
            <IconClose>
              <use href={`${icons}#icon-close`}></use>
            </IconClose>
          </button>
          <img src={darkLogo} alt="" />
        </FlexWrap>
        <CartButton />
      </HeaderMb>
      <AuthContainer>
        <NavLink to={"/"} style={{ fontSize: "18px", paddingRight: "20px" }}>
          Вхід
        </NavLink>
        <RegisterLink to={"/subscription"}>Реєстрація</RegisterLink>
      </AuthContainer>
      <nav>
        <NavList>
          <li>
            <NavLinkStyled to={"/"}>Головна сторінка</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={"/catalogue"}>Каталог іграшок</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={"/about"}>Про проєкт</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to={"/faq"}>Популярні запитання</NavLinkStyled>
          </li>
        </NavList>
      </nav>
      <SocialMediaList>
        <li>
          <a
            href="https://www.facebook.com/spilno.ihrashka"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <IconSocial>
              <use href={`${icons}#icon-facebook`}></use>
            </IconSocial>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/spilno_ihrashka"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            <IconSocial>
              <use href={`${icons}#icon-instagram`}></use>
            </IconSocial>
          </a>
        </li>
      </SocialMediaList>
    </MobileMenuSection>
  );
};

export default MobileMenu;
