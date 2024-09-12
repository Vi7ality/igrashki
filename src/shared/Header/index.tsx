import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import { autoLogin } from '../../redux/slices/client.slice';
import { useAppDispatch } from '../../redux/store';
import ProfileButton from './components/ProfileButton';
import CartButton from './components/CartButton';
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
  FlexWrap,
} from './Header.styled';
import icons from '../../assets/icons.svg';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
    if (open) {
      document.body.classList.add('modal-open');
    }
    if (!open) {
      document.body.classList.remove('modal-open');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      dispatch(autoLogin(token));
    }
  }, [dispatch]);

  return (
    <>
      <HeaderStyled>
        <FlexContainer>
          <FlexWrap>
            <MobMenuBtn onClick={handleMenuClick}>
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
                <LinkStyled to={'/catalogue'}>Каталог іграшок</LinkStyled>
              </li>
              <li>
                <LinkStyled to={'/about'}>Про проєкт</LinkStyled>
              </li>
              <li>
                <LinkStyled to={'/faq'}>Популярні запитання</LinkStyled>
              </li>
            </NavList>
          </NavContainer>
          <ContainerRight>
            <ProfileButton
              showAuthModal={showAuthModal}
              setShowAuthModal={setShowAuthModal}
            />
            <CartButton />
          </ContainerRight>
        </FlexContainer>
      </HeaderStyled>
      <MobileMenu
        openState={open}
        handleMenuClick={handleMenuClick}
        setShowAuthModal={setShowAuthModal}
      />
    </>
  );
};

export default Header;
