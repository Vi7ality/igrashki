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
            <JoinNavLink to={"/"}>Доєднатися!</JoinNavLink>
            <ShareNavLink to={"/"}>
              <GiftSvg>
                <use href={`${icons}#icon-gift`}></use>
              </GiftSvg>
              Передати іграшки
            </ShareNavLink>
          </LinkContainer>
          <PenguinsImg
            srcSet={`${svgMbImg} 370w, ${svgTbImg}  980w, ${svgImg} 1340w`}
            sizes="(max-width: 979px) 370px, ((min-width: 980px) and (max-width: 1349px)) 980px, (min-width: 1340px) 1340px"
            alt="Penguins"
          />
        </ContentContainer>
      </ContainerBgImage>
    </SectionStyled>
  );
};

export default JoinUs;
