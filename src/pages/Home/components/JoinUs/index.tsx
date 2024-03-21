import {
  ContainerBgImage,
  ContentContainer,
  SectionStyled,
  SectionTitleStyled,
  LinkContainer,
  JoinNavLink,
  ShareNavLink,
  PenguinsImg,
} from "./JoinUs.styled";

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
            <ShareNavLink to={"/catalogue"}>Перейти до каталогу</ShareNavLink>
          </LinkContainer>
          <PenguinsImg />
        </ContentContainer>
      </ContainerBgImage>
    </SectionStyled>
  );
};

export default JoinUs;
