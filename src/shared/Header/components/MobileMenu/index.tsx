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
  LinkStyled,
  BoldLink,
  NavList,
  RegisterLink,
  SocialMediaList,
  UserTerms,
  CloseBtn,
} from './MobileMenu.styled';
import icons from '../../../../assets/icons.svg';
import darkLogo from '../../../../assets/logo-dark.svg';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { clearClient } from '../../../../redux/slices/client.slice';

type Props = {
  handleMenuClick(): void;
  openState: boolean;
};

const MobileMenu = ({ handleMenuClick, openState }: Props) => {
  const { client } = useAppSelector(state => state.client);
  const dispatch = useAppDispatch();

  const onLogoutClick = () => {
    dispatch(clearClient());
    handleMenuClick();
  };

  useEffect(() => {
    if (openState) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [openState, client]);

  return (
    <MobileMenuSection className={openState ? 'open' : ''}>
      <MenuContainer>
        <HeaderMb>
          <FlexWrap>
            <CloseBtn onClick={handleMenuClick}>
              <IconClose>
                <use href={`${icons}#icon-close`}></use>
              </IconClose>
            </CloseBtn>
            <img src={darkLogo} alt="logo" />
          </FlexWrap>
          <BagNavLink to={'/bag'} onClick={handleMenuClick}>
            <IconBag>
              <use href={`${icons}#icon-basket-white`}></use>
            </IconBag>
          </BagNavLink>
        </HeaderMb>
        <AuthContainer>
          {client ? (
            <LinkStyled to={'/profile'} onClick={handleMenuClick}>
              {client.parentName + ' ' + client.parentSurname}
            </LinkStyled>
          ) : (
            <>
              <LinkStyled
                to={'/'}
                style={{ fontSize: '18px', paddingRight: '20px' }}
                onClick={handleMenuClick}
              >
                Вхід
              </LinkStyled>
              <RegisterLink to={'/subscription'} onClick={handleMenuClick}>
                Реєстрація
              </RegisterLink>
            </>
          )}
        </AuthContainer>
        <nav>
          <NavList>
            <li>
              <BoldLink to={'/'} onClick={handleMenuClick}>
                Головна сторінка
              </BoldLink>
            </li>
            <li>
              <BoldLink to={'/catalogue'} onClick={handleMenuClick}>
                Каталог іграшок
              </BoldLink>
            </li>
            <li>
              <BoldLink to={'/about'} onClick={handleMenuClick}>
                Про проєкт
              </BoldLink>
            </li>
            <li>
              <BoldLink to={'/faq'} onClick={handleMenuClick}>
                Популярні запитання
              </BoldLink>
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
              <ContactLink type="tel" href="tel:+380123456789">
                +380 96 077 11 02
              </ContactLink>
            </li>
            <li>
              <ContactLink type="mail" href="mailto:hello@growithyou.club">
                growwithyou.subscription@gmail.com
              </ContactLink>
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
