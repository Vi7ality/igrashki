import styled from "styled-components";
import Container from "../../shared/Container";
import NotFoundImgMb from "./assets/404-illustration_mb.svg";
import NotFoundImgTb from "./assets/404-illustration_tb.svg";
import NotFoundImgDesk from "./assets/404-illustration_desk.svg";
import { NavLinkAccent } from "../../shared/NavigateLinks/NavigateLinks.styled";

export const Section = styled.section`
  padding-top: 98px;
  padding-bottom: 253px;

  @media ${(p) => p.theme.device.tablet} {
    padding-top: 153px;
    padding-bottom: 47px;
  }
  @media ${(p) => p.theme.device.desktop} {
    padding-top: 139px;
    padding-bottom: 60px;
  }
`;

export const FlexConatiner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.div`
  background-image: url(${NotFoundImgMb});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 158px;

  @media ${(p) => p.theme.device.mobile} {
    width: 418px;
  }

  @media ${(p) => p.theme.device.tablet} {
    background-image: url(${NotFoundImgTb});
    width: 598px;
    height: 220px;
  }

  @media ${(p) => p.theme.device.desktop} {
    background-image: url(${NotFoundImgDesk});
    width: 736px;
    height: 271px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 18px;
  margin-top: 30px;
  @media ${(p) => p.theme.device.tablet} {
    font-size: 24px;
    margin-top: 40px;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 10px;
  @media ${(p) => p.theme.device.tablet} {
    font-size: 18px;
  }
`;

export const LinkToMain = styled(NavLinkAccent)`
  width: 245px;
  margin-top: 30px;

  @media ${(p) => p.theme.device.tablet} {
    width: 330px;
    margin-top: 40px;
  }
`;
