import styled from "styled-components";
import bgImgMb from "../../assets/hero-bg_mb.svg";
import bgImgTb from "../../assets/hero-bg_tb.svg";
import bgImgDesk from "../../assets/hero-bg_desk.svg";

export const SectionStyled = styled.section`
  background-image: url(${bgImgMb});
  background-position: center;
  fill: ${(props) => props.theme.colors.baseBlue};
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 115px;
  padding-bottom: 76px;

  @media ${(props) => props.theme.device.tablet} {
    background-image: url(${bgImgTb});

    padding-top: 184px;
    padding-bottom: 176px;
  }

  @media ${(props) => props.theme.device.desktop} {
    background-image: url(${bgImgDesk});

    padding-top: 236px;
    padding-bottom: 160px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 68px;
  }
`;

export const ImgStyled = styled.img`
  width: 310px;
  height: 122px;

  position: absolute;
  bottom: -152px;
  left: 30px;
  z-index: 9;

  @media ${(props) => props.theme.device.tablet} {
    width: 564px;
    height: 222px;
    bottom: -257px;
    left: 208px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 726px;
    height: 286px;
    bottom: -321px;
    left: 324px;
  }
`;
