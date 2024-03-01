import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";
import { ContentContainer, SectionStyled, TextStyled } from "./AboutSection.styled";

const AboutSection = () => {
  return (
    <SectionStyled>
      <ContentContainer>
        <SectionTitle style={{ textAlign: "start" }}>Що таке Спільно Іграшки?</SectionTitle>
        <TextStyled style={{ marginTop: "40px" }}>
          <span>Спільно Іграшки</span> — це програма з <span>безкоштовної</span> оренди дитячих
          іграшок для раннього розвитку, що реалізується через мережу Дитячих точок "Спільно". В
          основі проєкту лежить ідея бібліотеки, де замість книжок — іграшки.
        </TextStyled>
        <TextStyled>
          <span>Участь у програмі повністю безкоштовна.</span>
          <br />
          Наразі проєкт реалізується у Чернівецькій, Тернопільській, Івано-Франківській та
          Закарпатській та Львівській областях.
        </TextStyled>
      </ContentContainer>
    </SectionStyled>
  );
};

export default AboutSection;
