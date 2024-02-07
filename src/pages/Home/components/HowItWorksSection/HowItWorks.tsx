// import styles from "./HowItWorks.module.scss";
// import step1Img from "../assets/steps/step1.png";
// import step2Img from "../assets/steps/step2.png";
// import step3Img from "../assets/steps/step3.png";
import {
  ContentContainer,
  SectionStyled,
  SectionTitle,
  ListStyled,
  ItemStyled,
  SvgStyled,
  TextStyled,
  LinkStyled
} from "./HowItWorks.styled";
import svgImg from "../../assets/homepage_vector-img.svg";

const HowItWorks = () => {
  return (
    <SectionStyled>
      <ContentContainer>
        <SectionTitle>Як це працює?</SectionTitle>
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
              <use href={`${svgImg}#howworks_fill`}></use>
            </SvgStyled>
            <TextStyled>
              Відвідуйте ігрові сесії у Дитячій точці "Спільно” та забираєте іграшки, що
              сподобались, додому
            </TextStyled>
          </ItemStyled>
          <ItemStyled>
            <SvgStyled>
              <use href={`${svgImg}#howworks_takepart`}></use>
            </SvgStyled>
            <TextStyled>
              Обмінюйте іграшки щотримісяці та ставайте частиною спільноти однодумців
            </TextStyled>
          </ItemStyled>
        </ListStyled>
      </ContentContainer>
    </SectionStyled>
  );
};

export default HowItWorks;
