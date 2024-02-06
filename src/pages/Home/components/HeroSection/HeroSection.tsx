
import Container from "../../../../shared/Container";
import { BearsSvg, FlexCont, LinkStyled, LinkTrsp, SectionStyled, TextStyled, Title } from "./HeroSection.styled";
import svgImg from '../../assets/homepage_vector-img.svg'
const HeroSection = () => {
  return (
    <SectionStyled>
      <Container>
        <Title>
          <span>Спільно </span>
           іграшки
        </Title>
        <TextStyled>Мережа <span>безоплатних</span> бібліотек іграшок для раннього розвитку</TextStyled>
        <FlexCont>
          <LinkStyled to="/subscription">Заповнити анкету</LinkStyled>
          <LinkTrsp to="/catalogue">Знайти бібліотеку</LinkTrsp>
        </FlexCont>
        <BearsSvg>
          <use href={`${svgImg}#hero_bears`}/>
        </BearsSvg >
      </Container>
    </SectionStyled>
  );
};

export default HeroSection;
