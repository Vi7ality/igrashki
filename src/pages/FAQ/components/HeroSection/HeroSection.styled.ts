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

    padding-top: 142px;
    padding-bottom: 76px;

  @media ${(props) => props.theme.device.tablet} {
    background-image: url(${bgImgTb});
    
    padding-top: 236px;
    padding-bottom: 85px;
  }

  @media ${(props) => props.theme.device.desktop} {
    background-image: url(${bgImgDesk});
    background-position: 0 0;
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

