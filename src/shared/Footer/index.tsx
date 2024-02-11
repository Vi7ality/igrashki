
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { ContainerRight, FlexContainer, FooterTop, LinkStyled, Logo, NavContainer, NavList } from "./Footer.styled";
import Container from "../Container";


const Footer = () => {
  return (
    <footer>
      <div>
        <FooterTop>
        <FlexContainer>
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
            <a href="" target="_blank" rel="noreferrer nofollow noopener">instagram</a>
            <a href="" target="_blank" rel="noreferrer nofollow noopener">facebook</a>
          </ContainerRight>
        </FlexContainer>
          <div><ul><a href="">Terms & Conditions</a><a href="">Legal & Privacy</a></ul>
          <ul><a href="tel:+380123456789">+380 12 345 67 89</a><a href="mailto:hello@growithyou.club">hello@growithyou.club</a></ul></div>
          <p>Ⓒ 2024 Growithyou</p>
      </FooterTop>
      <div></div>
      </div>
      
    </footer>
  );
};

export default Footer;
