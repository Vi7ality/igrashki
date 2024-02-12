import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  ContainerRight,
  FlexWrap,
  FooterTop,
  LinkStyled,
  Logo,
  NavContainer,
  NavList,
  IconStyled,
  TermsList,
  ContactList,
  FlexWrapTop,
  TermsLink,
  ContactLink,
  CopyrightStyled,
  FooterBottom,
  IconList,
  FlexContainer,
  TeplitsiaIco,
  GrowWithYouIco,
  UnicefIco,
  TextStyled
} from "./Footer.styled";
import Container from "../Container";
import icons from "../../assets/icons.svg";

const Footer = () => {
  return (
    <footer>
      <FooterTop>
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
                <a href="" target="_blank" rel="noreferrer nofollow noopener">
                  <IconStyled>
                    <use href={`${icons}#icon-instagram`}></use>
                  </IconStyled>
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer nofollow noopener">
                  <IconStyled>
                    <use href={`${icons}#icon-facebook`}></use>
                  </IconStyled>
                </a>
              </li>
            </ContainerRight>
          </FlexWrapTop>
          <FlexWrap>
            <TermsList>
              <li>
                <TermsLink href="">Terms & Conditions</TermsLink>
              </li>
              <li>
                <TermsLink href="">Legal & Privacy</TermsLink>
              </li>
            </TermsList>
            <ContactList>
              <li>
                <ContactLink href="tel:+380123456789">+380 12 345 67 89</ContactLink>
              </li>
              <li>
                <ContactLink href="mailto:hello@growithyou.club">hello@growithyou.club</ContactLink>
              </li>
            </ContactList>
          </FlexWrap>
          <CopyrightStyled>Ⓒ 2024 Growithyou</CopyrightStyled>
        </Container>
      </FooterTop>
      <FooterBottom>
        <FlexContainer>
          <IconList>
            <li>
              <TeplitsiaIco>
                <use href={`${icons}#icon-teplitsia-logo`}></use>
              </TeplitsiaIco>
            </li>
            <li>
              <GrowWithYouIco>
                <use href={`${icons}#icon-growwithyou-darklogo`}></use>
              </GrowWithYouIco>
            </li>
            <li>
              <UnicefIco>
                <use href={`${icons}#icon-unicef-logo`}></use>
              </UnicefIco>
            </li>
          </IconList>
          <TextStyled>
            “Спільно Іграшки” - програма з безкоштовної оренди дитячих іграшок для раннього розвитку
            реалізовується ГО “Платформа ініціатив “Теплиця” за фінансової підтримки Дитячого фонду
            ООН (ЮНІСЕФ).
          </TextStyled>
        </FlexContainer>
      </FooterBottom>
    </footer>
  );
};

export default Footer;
