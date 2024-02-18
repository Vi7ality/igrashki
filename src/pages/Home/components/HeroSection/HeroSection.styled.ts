import styled from "styled-components";
import { NavLinkStyled, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import bgImage from "../../assets/home-hero-bg.svg";
import bgMbImage from "../../assets/home-hero-bg_mb.svg"
import bgTbImage from "../../assets/home-hero-bg_tb.svg"
import Container from "../../../../shared/Container";

export const SectionStyled = styled.section`
  /* width: 100%; */
  padding-top: 92px;
  padding-bottom: 314px;
  background-image: url(${bgMbImage});
  background-position: center;
  fill: #46409c;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${(props) => props.theme.device.tablet} {
    background-image: url(${bgTbImage});
    padding-top: 175px;
    padding-bottom: 209px;
    
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 245px;
    padding-bottom: 218px;
    background-image: url(${bgImage});
  }
`;

export const ContainerStyled = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.device.tablet} {
  align-items: start;
  }
`;

export const Title = styled.h1`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 36px;
  line-height: 0.897;
  color: ${(props) => props.theme.colors.white};

  margin-bottom: 20px;

  span {
    color: #ffcd1e;
  }
  @media ${(props) => props.theme.device.tablet} {
    font-size: 54px;
  }

  @media ${(props) => props.theme.device.desktop} {
    font-size: 68px;
    margin-bottom: 30px;
  }
`;

export const TextStyled = styled.p`
  font-size: 18px;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.white};
  max-width: 300px;
  text-align: center;
  margin-bottom: 40px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 22px;
    margin-bottom: 50px;
    max-width: 500px;
    text-align: start;
  }

  @media ${(props) => props.theme.device.desktop} {
    font-size: 28px;
    margin-bottom: 70px;
    max-width: 569px;
  }

  span {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
`;

export const FlexCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;
export const LinkStyled = styled(NavLinkStyled)`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.baseBlue};
  min-width: 250px;
  padding: 15px 52px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 20px;
    min-width: 241px;
    padding: 23px 27px;
  }

  @media ${(props) => props.theme.device.desktop} {
    min-width: 280px;
    padding: 23px 46px;
  }
`;

export const LinkTrsp = styled(NavLinkTrsp)`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  padding: 15px 52px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 20px;
    min-width: 241px;
    padding: 23px 27px;
  }

  @media ${(props) => props.theme.device.desktop} {
    min-width: 280px;
    padding: 23px 46px;
  }

  svg {
    display: none;

    @media ${(props) => props.theme.device.tablet} {
      display: block;
      width: 28px;
      height: 28px;
      margin-right: 10px;
    }
  }
`;
export const BearsSvg = styled.svg`
  width: 190px;
  height: 275px;
  position: absolute;
  bottom: -331px;
  right: 108px;


  @media ${(props) => props.theme.device.tablet} {
  width: 300px;
  height: 435px;
  bottom: -230px;
  right: 51px;
  }

  @media ${(props) => props.theme.device.desktop} {
  width: 361px;
  height: 523px;
  bottom: -229px;
  right: 189px;
  }
`;
