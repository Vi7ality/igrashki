import HeaderBackgound from '../../shared/HeaderBackground';
import welcomeImg from './assets/welcome.svg';
import {
  SectionStyled,
  Image,
  PageTitle,
  FlexContainer,
  TextStyled,
  LinkStyled,
  AccentLink,
  LinkWrap,
} from './RegisterSuccess.styled';

const RegisterSuccess = () => {
  return (
    <>
      <HeaderBackgound />
      <SectionStyled>
        <FlexContainer>
          <Image src={welcomeImg} alt="welcome image"></Image>
          <PageTitle>Дякуємо за реєстрацію!</PageTitle>
          <TextStyled>
            Щоб обрати іграшки, завітайте до нашого каталогу.
            <br />
            Бажаємо гарного дня!
          </TextStyled>
          <LinkWrap>
            <LinkStyled to="/">Повернутися на головну</LinkStyled>
            <AccentLink to="/catalogue">Обрати іграшки</AccentLink>
          </LinkWrap>
        </FlexContainer>
      </SectionStyled>
    </>
  );
};

export default RegisterSuccess;
