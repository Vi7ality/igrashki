import { NavLink } from "react-router-dom";
import CartButton from "../CartButton";
import {
  AuthContainer,
  ContactLink,
  ContactList,
  FlexWrap,
  HeaderMb,
  IconClose,
  IconSocial,
  MenuBottom,
  MenuContainer,
  MobileMenuSection,
  NavLinkStyled,
  NavList,
  RegisterLink,
  SocialMediaList,
} from "./MobileMenu.styled";
import icons from "../../../../assets/icons.svg";
import darkLogo from "../../../../assets/logo-dark.svg";
import { MouseEventHandler, useEffect } from "react";

type Props = {
  handleMenuClick: MouseEventHandler;
  openState: boolean;
};

const MobileMenu = ({ handleMenuClick, openState }: Props) => {
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
      <MenuContainer>
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
        <MenuBottom>
          <ContactList>
            <li>
              <ContactLink href="tel:+380123456789">+380 12 345 67 89</ContactLink>
            </li>
            <li>
              <ContactLink href="mailto:hello@growithyou.club">hello@growithyou.club</ContactLink>
            </li>
          </ContactList>
          <a href="/user_terms&conditions.pdf" target="_blank" rel="noreferrer nofollow noopener">
            Правила для користувачів
          </a>
        </MenuBottom>
      </MenuContainer>
    </MobileMenuSection>
  );
};

export default MobileMenu;
