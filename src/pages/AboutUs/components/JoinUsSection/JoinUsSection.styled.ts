import styled from "styled-components";
import Container from "../../../../shared/Container";
import { NavLinkAccent, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import LinesTb from "../../assets/form-lines_tb.svg";
import LinesDesk from "../../assets/form-lines_desk.svg";

export const SectionStyled = styled.section`
  overflow: hidden;
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 95px;
    padding-bottom: 66px;
  }
`;

export const ContentContainer = styled(Container)`
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 46px 21px 35px 22px;

  @media ${(props) => props.theme.device.mobile} {
    width: 350px;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 940px;
    padding: 46px 70px;
    position: relative;

    &::before {
      content: "";
      background-image: url(${LinesTb});
      background-repeat: no-repeat;
      width: 1226px;
      height: 350px;
      position: absolute;
      z-index: -1;
      top: 24px;
      left: -153px;
      @media ${(props) => props.theme.device.desktop} {
        background-image: url(${LinesDesk});
        width: 1750px;
        height: 350px;

        top: 24px;
        left: -225px;
      }
    }
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 1300px;
    padding: 77px 114px;
  }
`;

export const JoinTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 1.4;
  margin-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 48px;
    line-height: 1.292;
    margin-bottom: 50px;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;
export const AccentLinkStyled = styled(NavLinkAccent)`
  color: ${(props) => props.theme.colors.darkBlue};

  @media ${(props) => props.theme.device.tablet} {
    min-width: 307px;
  }
`;

export const TrspLinkStyled = styled(NavLinkTrsp)`
  color: ${(props) => props.theme.colors.baseBlue};
  border-color: ${(props) => props.theme.colors.baseBlue};

  @media ${(props) => props.theme.device.tablet} {
    min-width: 280px;
  }
`;
