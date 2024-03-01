import styled from "styled-components";
import Container from "../../../../shared/Container";
import bgTbImg from "../../assets/about-lines-bg_tb.svg";
import bgDeskImg from "../../assets/about-lines-bg_desk.svg";

export const SectionStyled = styled.section`
  overflow: hidden;
  padding-top: 106px;
  padding-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 121px;
    padding-bottom: 40px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 229px;
    padding-bottom: 91px;
  }
`;

export const ContentContainer = styled(Container)`
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 41px 20px;

  @media ${props => props.theme.device.mobile} {
    width: 350px;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 940px;
    padding: 61px 45px;
    position: relative;

    &::before {
      content: "";
      width: 1226px;
      height: 373px;
      background-image: url(${bgTbImg});
      background-size: 1226px 373px;
      position: absolute;
      z-index: -1;

      top: 43px;
      left: -153px;
      @media ${(props) => props.theme.device.desktop} {
        width: 1750px;
        height: 370px;
        background-image: url(${bgDeskImg});
        background-size: 1750px 370px;

        top: 44px;
        left: -235px;
      }
    }

    @media ${(props) => props.theme.device.desktop} {
      width: 1300px;
      padding: 104px 75px;
    }
  }
`;

export const TextStyled = styled.p`
  font-size: 18px;

  margin-top: 30px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 24px;
  }

  span {
    font-weight: 700;
  }
`;
