import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { useEffect } from "react";
import { autoLogin } from "../../redux/slices/client.slice";
import { useAppDispatch } from "../../redux/store";
import HeaderMobile from "./HeaderMobile";
import ProfileButton from "./components/ProfileButton";
import CartButton from "./components/CartButton";
import {
  ContainerRight,
  FlexContainer,
  HeaderStyled,
  LinkStyled,
  Logo,
  NavContainer,
  NavList,
} from "./Header.styled";

interface HeaderProps {
  darkMode?: boolean;
}

const Header = ({ darkMode }: HeaderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(autoLogin(token));
    }
  }, []);

  return (
    <>
      <HeaderStyled>
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
            <ProfileButton darkMode={darkMode} />
            <CartButton darkMode={darkMode} />
          </ContainerRight>
        </FlexContainer>
      </HeaderStyled>
      <HeaderMobile darkMode={darkMode} />
    </>
  );
};

export default Header;
