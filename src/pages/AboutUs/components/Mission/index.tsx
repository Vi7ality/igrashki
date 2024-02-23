import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";
import Container from "../../../../shared/Container";
import {
  BearImg,
  CollageImg,
  ContentBottom,
  ContentTop,
  FlexWrap,
  SectionStyled,
  TextBold,
  TextStyled,
  WrapText,
} from "./Mission.styled";
import photoCollage from "../../assets/photo-collage.png";
import BearSvg from "../../assets/taddybear.svg";

const Mission = () => {
  return (
    <SectionStyled>
      <Container>
        <ContentTop>
          <FlexWrap>
            <SectionTitle style={{ textAlign: "start" }}>Наша місія</SectionTitle>
            <TextStyled>Повернути частинку дитинства дітям, які щодня проживають війну.</TextStyled>
          </FlexWrap>
          <CollageImg src={photoCollage}></CollageImg>
        </ContentTop>
        <ContentBottom>
          <WrapText>
            <TextBold>
              Однією із цілей проєкту є популяризація інноваційної та екологічної моделі споживання.
            </TextBold>
            <TextStyled>
              Користуватися іграшками певний час, а потім повертати — це той підхід, що допоможе
              дітям у майбутньому більш усвідомлено ставитись до придбання речей.
            </TextStyled>
          </WrapText>
          <BearImg src={BearSvg} />
        </ContentBottom>
      </Container>
    </SectionStyled>
  );
};

export default Mission;
