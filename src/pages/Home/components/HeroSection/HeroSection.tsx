
import Container from "../../../../shared/Container";
import { FlexCont, LinkStyled, LinkTrsp, SectionStyled, TextStyled, Title } from "./HeroSection.styled";

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
        <img href='../../assets/vector-img.svg#home-hero-bears'></img>
      </Container>
    </SectionStyled>
  );
};

export default HeroSection;
