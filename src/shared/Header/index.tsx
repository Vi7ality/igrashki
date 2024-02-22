import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useEffect } from "react";
import { autoLogin } from "../../redux/slices/client.slice";
import { useAppDispatch } from "../../redux/store";
// import HeaderMobile from "./HeaderMobile";
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
  MobMenuBtn,
  MenuIcon,
  FlexWrap
} from "./Header.styled";
import icons from "../../assets/icons.svg";

// interface HeaderProps {
//   darkMode?: boolean;
// }

const Header = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      dispatch(autoLogin(token));
    }
  }, [dispatch]);

  return (
    <>
      <HeaderStyled>
        <FlexContainer>
          <FlexWrap>
            <MobMenuBtn>
              <MenuIcon>
                <use href={`${icons}#icon-menu`}></use>
              </MenuIcon>
            </MobMenuBtn>
            <Link to="/">
              <Logo src={logo} alt="GROW WITH U logo" />
            </Link>
          </FlexWrap>
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
            <ProfileButton />
            <CartButton  />
          </ContainerRight>
        </FlexContainer>
      </HeaderStyled>
      {/* <HeaderMobile darkMode={darkMode} /> */}
    </>
  );
};

export default Header;
