import styled from "styled-components";
import Container from "../../../../shared/Container";
import bgImg from "../../assets/lines-bg.svg";
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";
import { NavLinkAccent, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";

export const SectionStyled = styled.section`
  padding-top: 236px;
  padding-bottom: 100px;
`;
export const ContainerBgImage = styled(Container)`
  position: relative;

  &::before {
    content: "";
    background-image: url(${bgImg});
    width: 1770px;
    height: 588px;
    position: absolute;
    top: 0;
    left: -145px;
    z-index: -1;
  }
`;

export const ContentContainer = styled.div`
  width: 1300px;
  height: 462px;
  margin: 0 auto;

  padding: 109px 632px 109px 109px;

  background-color: #ffffff;
  border-radius: 60px;

  position: relative;
  z-index: 9;
`;

export const SectionTitleStyled = styled(SectionTitle)`
  text-align: start;
  margin-bottom: 50px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const JoinNavLink = styled(NavLinkAccent)`
  padding: 23px 47px 23px 57px;
`;
export const GiftSvg = styled.svg`
  width: 28px;
  height: 28px;

  margin-right: 10px;
`;

export const ShareNavLink = styled(NavLinkTrsp)`
  display: flex;
  align-items: center;
  padding: 23px 28px;
  border-color: #46409c;
`;
