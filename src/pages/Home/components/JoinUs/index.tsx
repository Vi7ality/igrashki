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
import svgMbImg from "../../assets/penguins-mb.svg";
import svgTbImg from "../../assets/penguins-tb.svg";

const JoinUs = () => {
  return (
    <SectionStyled>
      <ContainerBgImage>
        <ContentContainer>
          <SectionTitleStyled>
            Приєднуйся до нас вже сьогодні!<span>&#x1f917;</span>
          </SectionTitleStyled>
          <LinkContainer>
            <JoinNavLink to={"/subscription"}>Доєднатися!</JoinNavLink>
            <ShareNavLink to={"/catalogue"}>
              <GiftSvg>
                <use href={`${icons}#icon-gift`}></use>
              </GiftSvg>
              Передати іграшки
            </ShareNavLink>
          </LinkContainer>
          <PenguinsImg/>
        </ContentContainer>
      </ContainerBgImage>
    </SectionStyled>
  );
};

export default JoinUs;
