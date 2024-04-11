import { Link } from "react-router-dom";
import Container from "../../../Container";
import {
  ContactLink,
  ContactList,
  ContainerRight,
  CopyrightStyled,
  FlexWrapTop,
  FooterTopStyled,
  IconStyled,
  LinkStyled,
  Logo,
  NavContainer,
  NavList,
  TermsLink,
  FlexWrapBottom,
} from "./FooterTop.styled";
import icons from "../../../../assets/icons.svg";
import logo from "../../../../assets/logo.svg";

const FooterTop = () => {
  return (
    <FooterTopStyled>
      <Container>
        <FlexWrapTop>
          <Link to="/">
            <Logo src={logo} alt="GROW WITH U logo" />
          </Link>
          <NavContainer>
            <NavList>
              <li>
                <LinkStyled to={"/catalogue"}>Каталог іграшок</LinkStyled>
              </li>
              <li>
                <LinkStyled to={"/about"}>Про проєкт</LinkStyled>
              </li>
              <li>
                <LinkStyled to={"/faq"}>Популярні запитання</LinkStyled>
              </li>
            </NavList>
          </NavContainer>
          <ContainerRight>
            <li>
              <a href="https://www.facebook.com/spilno.ihrashka" target="_blank" rel="noreferrer nofollow noopener">
                <IconStyled>
                  <use href={`${icons}#icon-facebook`}></use>
                </IconStyled>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/spilno_ihrashka" target="_blank" rel="noreferrer nofollow noopener">
                <IconStyled>
                  <use href={`${icons}#icon-instagram`}></use>
                </IconStyled>
              </a>
            </li>
          </ContainerRight>
        </FlexWrapTop>
        <FlexWrapBottom>
          <TermsLink
            href="/user_terms&conditions.pdf"
            target="_blank"
            rel="noreferrer nofollow noopener"
          >
            Правила для користувачів
          </TermsLink>
          <ContactList>
            <li>
              <ContactLink href="tel:+380123456789">+380 96 077 11 02</ContactLink>
            </li>
            <li>
              <ContactLink href="mailto:hello@growithyou.club">growwithyou.subscription@gmail.com</ContactLink>
            </li>
          </ContactList>
        </FlexWrapBottom>
        <CopyrightStyled>Ⓒ 2024 Growithyou</CopyrightStyled>
      </Container>
    </FooterTopStyled>
  );
};

export default FooterTop;
