import icons from "../../../../assets/icons.svg";
import {
  FlexContainer,
  FooterBottomStyled,
  GrowWithYouIco,
  IconList,
  TeplitsiaIco,
  TextStyled,
  UnicefIco,
} from "./FooterBottom.styled";

const FooterBottom = () => {
  return (
    <FooterBottomStyled>
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
    </FooterBottomStyled>
  );
};

export default FooterBottom;
