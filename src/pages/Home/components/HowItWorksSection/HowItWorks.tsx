// import styles from "./HowItWorks.module.scss";
// import step1Img from "../assets/steps/step1.png";
// import step2Img from "../assets/steps/step2.png";
// import step3Img from "../assets/steps/step3.png";
import { ContentContainer, SectionStyled, SectionTitle, ListStyled, ItemStyled } from "./HowItWorks.styled";
import svgImg from "../../assets/homepage_vector-img.svg";
import { NavLink } from "react-router-dom";

const HowItWorks = () => {
  return (
    <SectionStyled>
      <ContentContainer>
        <SectionTitle>Як це працює?</SectionTitle>
        <ListStyled>
          <ItemStyled>
            <svg>
              <use href={`${svgImg}#howworks_fill`}></use>
            </svg>
            <p>
              <NavLink to="/subscription">Заповнюйте анкету</NavLink> на сайті або у Дитячій точці "Спільно”, де вже працює бібліотека
              іграшок
            </p>
          </ItemStyled>
          <ItemStyled>
            <p>
              <svg>
                <use href={`${svgImg}#howworks_fill`}></use>
              </svg>
              Відвідуйте ігрові сесії у Дитячій точці "Спільно” та забираєте іграшки, що
              сподобались, додому
            </p>
          </ItemStyled>
          <ItemStyled>
            <p>
              <svg>
                <use href={`${svgImg}#howworks_takepart`}></use>
              </svg>
              Обмінюйте іграшки щотримісяці та ставайте частиною спільноти однодумців
            </p>
          </ItemStyled>
        </ListStyled>
      </ContentContainer>
    </SectionStyled>
  );
};

export default HowItWorks;
