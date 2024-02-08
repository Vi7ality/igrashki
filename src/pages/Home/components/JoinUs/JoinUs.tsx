import {
  ContainerBgImage,
  ContentContainer,
  SectionStyled,
  SectionTitleStyled,
  LinkContainer,
    GiftSvg,
    JoinNavLink,
    ShareNavLink
} from "./JoinUs.styled";
import icons from "../../../../assets/icons.svg";
import { NavLinkAccent, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
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
                <use href={`${icons}#gift`}></use>
              </GiftSvg>
              Передати іграшки
            </ShareNavLink>
          </LinkContainer>
        </ContentContainer>
      </ContainerBgImage>
    </SectionStyled>
  );
};

export default JoinUs;
