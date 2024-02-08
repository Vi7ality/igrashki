import {
  ContentContainer,
  SectionStyled,
  ListStyled,
  ItemStyled,
  SvgStyled,
  TextStyled,
  LinkStyled,
  ContainerBgImage,
  TitleStyled
} from "./HowItWorks.styled";
import svgImg from "../../assets/homepage_vector-img.svg";

const HowItWorks = () => {
  return (
    <SectionStyled>
      <ContainerBgImage>
        <ContentContainer>
        <TitleStyled>Як це працює?</TitleStyled>
        <ListStyled>
          <ItemStyled>
            <SvgStyled>
              <use href={`${svgImg}#howworks_fill`}></use>
            </SvgStyled>
            <TextStyled>
              <LinkStyled to="/subscription">Заповнюйте анкету</LinkStyled> на сайті або у Дитячій точці
              "Спільно”, де вже працює бібліотека іграшок
            </TextStyled>
          </ItemStyled>
          <ItemStyled>
            <SvgStyled>
              <use href={`${svgImg}#howworks_takepart`}></use>
            </SvgStyled>
            <TextStyled>
              Відвідуйте ігрові сесії у Дитячій точці "Спільно” та забираєте іграшки, що
              сподобались, додому
            </TextStyled>
          </ItemStyled>
          <ItemStyled>
            <SvgStyled>
              <use href={`${svgImg}#howworks_exchange`}></use>
            </SvgStyled>
            <TextStyled>
              Обмінюйте іграшки щотримісяці та ставайте частиною спільноти однодумців
            </TextStyled>
          </ItemStyled>
        </ListStyled>
      </ContentContainer>
      </ContainerBgImage>
    </SectionStyled>
  );
};

export default HowItWorks;
