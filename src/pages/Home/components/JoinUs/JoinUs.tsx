import {
  ContainerBgImage,
  ContentContainer,
  SectionStyled,
  SectionTitleStyled,
  LinkContainer,
  GiftSvg,
  JoinNavLink,
  ShareNavLink,
  PenguinsImg,
} from "./JoinUs.styled";
import icons from "../../../../assets/icons.svg";
import svgImg from "../../assets/penguins.svg";

const JoinUs = () => {
  return (
    <SectionStyled>
      <ContainerBgImage>
        <ContentContainer>
          <SectionTitleStyled>Приєднуйся до нас вже сьогодні!&#x1f917;</SectionTitleStyled>
          <LinkContainer>
            <JoinNavLink to={"/"}>Доєднатися!</JoinNavLink>
            <ShareNavLink to={"/"}>
              <GiftSvg>
                <use href={`${icons}#icon-gift`}></use>
              </GiftSvg>
              Передати іграшки
            </ShareNavLink>
          </LinkContainer>
          <PenguinsImg src={svgImg} alt="Penguins"></PenguinsImg>
        </ContentContainer>
      </ContainerBgImage>
    </SectionStyled>
  );
};

export default JoinUs;
