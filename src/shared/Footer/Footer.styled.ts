import styled from "styled-components";
import whaleBg from "./assets/whale-bg.svg";

export const FooterStyled = styled.footer`
  margin: 0;
  margin-top: auto;
  padding-top: 146px;
  height: auto;
  position: relative;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 189px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 289px;
  }
  &::before {
    content: "";
    background-image: url(${whaleBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 711px 119px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 119px;

    @media ${(props) => props.theme.device.tablet} {
      background-size: 1135px 189px;
      height: 189px;
    }

    @media ${(props) => props.theme.device.desktop} {
      background-size: 1727px 289px;
      height: 288px;
      width: 100%;
    }
  }
`;
