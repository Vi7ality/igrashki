import styled from "styled-components";
import Container from "../../../../shared/Container";
import bgImg from "../../assets/join-lines_bg.svg";
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";
import { NavLinkAccent, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";

export const SectionStyled = styled.section`
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 80px;
  @media ${(props) => props.theme.device.tablet} {
    padding-top: 104px;
    padding-bottom: 40px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 236px;
    padding-bottom: 100px;
  }
`;
export const ContainerBgImage = styled(Container)`
  @media ${(props) => props.theme.device.tablet} {
    position: relative;
    &::before {
      content: "";
      background-image: url(${bgImg});
      background-repeat: no-repeat;
      background-size: 1770px 400px;
      width: 1770px;
      height: 400px;
      position: absolute;
      top: 19px;

      left: -400px;
      z-index: -1;

      @media ${(props) => props.theme.device.desktop} {
        background-size: 1770px 515px;
        width: 1770px;
        height: 515px;
        top: -17px;
        left: -235px;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 350px;
  height: 493px;
  margin: 0 auto;

  padding: 42px 23px 373px 23px;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 30px;

  position: relative;
  z-index: 9;

  @media ${(props) => props.theme.device.tablet} {
    width: 940px;
    height: 438px;
    padding: 97px 341px 97px 44px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 1300px;
    height: 462px;
    border-radius: 60px;
    padding: 109px 632px 109px 109px;
  }
`;

export const SectionTitleStyled = styled(SectionTitle)`
  margin-bottom: 30px;
  font-size: 28px;

  & span {
    display: none;
  }

  @media ${(props) => props.theme.device.tablet} {
    font-size: 48px;
    margin-bottom: 50px;
    text-align: start;

    & span {
      display: inline;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }

  @media ${(props) => props.theme.device.desktop} {
  }
`;
export const JoinNavLink = styled(NavLinkAccent)`
  font-size: 16px;

  @media ${(props) => props.theme.device.tablet} {
    min-width: 195px;
    font-size: 20px;
  }

  @media ${(props) => props.theme.device.desktop} {
    min-width: 235px;
  }
`;

export const GiftSvg = styled.svg`
  display: none;
  @media ${(props) => props.theme.device.tablet} {
    display: block;
    width: 28px;
    height: 28px;
  }
  margin-right: 10px;
`;

export const ShareNavLink = styled(NavLinkTrsp)`
  border-color: ${(props) => props.theme.colors.baseBlue};
  color: ${(props) => props.theme.colors.baseBlue};

  @media ${(props) => props.theme.device.tablet} {
    min-width: 257px;
  }

  @media ${(props) => props.theme.device.desktop} {
    min-width: 280px;
  }
`;

export const PenguinsImg = styled.img`
  width: 331px;
  height: 222px;
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${(props) => props.theme.device.tablet} {
    width: 567px;
    height: 381px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 688px;
    height: 462px;
  }
`;
