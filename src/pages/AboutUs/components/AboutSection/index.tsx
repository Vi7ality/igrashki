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
          Ви можете взяти іграшки додому терміном до 1 місяця. 
          Наразі проєкт реалізується у Одесі, Херсоні, Дніпрі, Запоріжжі та Кривому Розі. 
        </TextStyled>
      </ContentContainer>
    </SectionStyled>
  );
};

export default AboutSection;
