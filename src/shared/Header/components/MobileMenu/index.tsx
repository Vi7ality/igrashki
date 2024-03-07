import { NavLink } from "react-router-dom";
import {
  AuthContainer,
  BagNavLink,
  ContactLink,
  ContactList,
  FlexWrap,
  HeaderMb,
  IconBag,
  IconClose,
  IconSocial,
  LogoutBtn,
  MenuBottom,
  MenuContainer,
  MobileMenuSection,
  NavLinkStyled,
  NavList,
  RegisterLink,
  SocialMediaList,
  UserTerms,
} from "./MobileMenu.styled";
import icons from "../../../../assets/icons.svg";
import darkLogo from "../../../../assets/logo-dark.svg";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { clearClient } from "../../../../redux/slices/client.slice";

type Props = {
  handleMenuClick(): void;
  openState: boolean;
};

const MobileMenu = ({ handleMenuClick, openState }: Props) => {
  const { client } = useAppSelector((state) => state.client);
  const dispatch = useAppDispatch();

  const onLogoutClick = () => {
    dispatch(clearClient());
    handleMenuClick();
  };

  useEffect(() => {
    if (openState) {
      const scrollY = window.scrollY;

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [openState, client]);

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
            <img src={darkLogo} alt="logo" />
          </FlexWrap>
          <BagNavLink to={"/bag"} onClick={handleMenuClick}>
            <IconBag>
              <use href={`${icons}#icon-basket-white`}></use>
            </IconBag>
          </BagNavLink>
        </HeaderMb>
        <AuthContainer>
          {client ? (
            <NavLink to={"/profile"} onClick={handleMenuClick}>
              {client.parentName + " " + client.parentSurname}
            </NavLink>
          ) : (
            <>
              <NavLink
                to={"/"}
                style={{ fontSize: "18px", paddingRight: "20px" }}
                onClick={handleMenuClick}
              >
                Вхід
              </NavLink>
              <RegisterLink to={"/subscription"} onClick={handleMenuClick}>
                Реєстрація
              </RegisterLink>
            </>
          )}
        </AuthContainer>
        <nav>
          <NavList>
            <li>
              <NavLinkStyled to={"/"} onClick={handleMenuClick}>
                Головна сторінка
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to={"/catalogue"} onClick={handleMenuClick}>
                Каталог іграшок
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to={"/about"} onClick={handleMenuClick}>
                Про проєкт
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to={"/faq"} onClick={handleMenuClick}>
                Популярні запитання
              </NavLinkStyled>
            </li>
          </NavList>
        </nav>
        {client && <LogoutBtn onClick={onLogoutClick}>Вихід</LogoutBtn>}
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
          <UserTerms
            href="/user_terms&conditions.pdf"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            Правила для користувачів
          </UserTerms>
        </MenuBottom>
      </MenuContainer>
    </MobileMenuSection>
  );
};

export default MobileMenu;
