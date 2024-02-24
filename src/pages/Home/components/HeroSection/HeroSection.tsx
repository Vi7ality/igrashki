import {
  BearsSvg,
  FlexCont,
  LinkStyled,
  LinkTrsp,
  SectionStyled,
  TextStyled,
  Title,
  ContainerStyled
} from "./HeroSection.styled";
import svgImg from "../../assets/homepage_vector-img.svg";
import icons from "../../../../assets/icons.svg";
import { NavLinkStyled } from "../../../../shared/NavigateLinks/NavigateLinks.styled";

const HeroSection = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <Title>
          <span>Спільно </span>
          іграшки
        </Title>
        <TextStyled>
          Мережа <span>безоплатних</span> бібліотек іграшок для раннього розвитку
        </TextStyled>
        <FlexCont>
          <NavLinkStyled to="/subscription">Заповнити анкету</NavLinkStyled>
          <LinkTrsp to="/catalogue">
            <svg>
              <use href={`${icons}#icon-location`} />
            </svg>
            Знайти бібліотеку
          </LinkTrsp>
        </FlexCont>
        <BearsSvg>
          <use href={`${svgImg}#svg-hero_bears`} />
        </BearsSvg>
      </ContainerStyled>
    </SectionStyled>
  );
};

export default HeroSection;
