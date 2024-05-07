import { Helmet } from 'react-helmet';
import HeaderBackgound from '../../shared/HeaderBackground';
import CheckImg from './assets/check-illustration.svg';
import {
  SectionStyled,
  Image,
  PageTitle,
  FlexContainer,
  TextStyled,
  LinkStyled,
} from './Confirmation.styled';

const Confirmation = () => {
  return (
    <>
      <Helmet>
        <title>Дякуємо за замовлення!</title>
      </Helmet>
      <HeaderBackgound />
      <SectionStyled>
        <FlexContainer>
          <Image src={CheckImg} alt="confirm image"></Image>
          <PageTitle>Дякуємо за замовлення!</PageTitle>
          <TextStyled>
            Найближчим часом наш менеджер зв’яжеться з вами в обраному
            месенджері, для погодження деталей.
            <br />
            Бажаємо гарного дня!
          </TextStyled>
          <LinkStyled to="/">Повернутися на головну</LinkStyled>
        </FlexContainer>
      </SectionStyled>
    </>
  );
};

export default Confirmation;
