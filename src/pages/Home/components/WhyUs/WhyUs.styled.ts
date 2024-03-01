import styled from "styled-components";
import cloudLeft from "../../assets/cloud-left.svg";
import cloudRight from "../../assets/cloud-right.svg";
import cloudLeftTb from "../../assets/cloud-left_tb.svg";
import cloudRightTb from "../../assets/cloud-right_tb.svg";
import cloudLeftMb from "../../assets/cloud-left_mb.svg";
import cloudRightMb from "../../assets/cloud-right_mb.svg";
import { NavLinkAccent } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import Container from "../../../../shared/Container";
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";

export const SectionStyled = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 153px;
  }

  &::before {
    content: "";
    background-image: url(${cloudLeftMb});
    background-repeat: no-repeat;
    width: 222px;
    height: 259px;
    position: absolute;
    left: 0;
    bottom: 22px;
    z-index: -1;
    @media ${(props) => props.theme.device.tablet} {
      background-image: url(${cloudLeftTb});
      background-repeat: no-repeat;
      width: 304px;
      height: 259px;
      left: 34px;
      bottom: -60px;
    }

    @media ${(props) => props.theme.device.desktop} {
      background-image: url(${cloudLeft});
      width: 223px;
      height: 366px;
      left: 0;
      top: 236px;
    }
  }

  &::after {
    content: "";
    background-image: url(${cloudRightMb});
    background-repeat: no-repeat;
    width: 67px;
    height: 258px;
    position: absolute;
    right: 0;
    bottom: 22px;
    z-index: -1;
    @media ${(props) => props.theme.device.tablet} {
      background-image: url(${cloudRightTb});
      width: 307px;
      height: 258px;
      right: 18px;
      bottom: -45px;
    }

    @media ${(props) => props.theme.device.desktop} {
      background-image: url(${cloudRight});
      width: 218px;
      height: 366px;
      right: 0;
      top: 236px;
    }
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleStyled = styled(SectionTitle)`
  margin-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    margin-bottom: 80px;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 60px;

  @media ${(props) => props.theme.device.tablet} {
    gap: 20px;
    margin-bottom: 100px;
  }

  @media ${(props) => props.theme.device.desktop} {
    column-gap: 40px;
    row-gap: 60px;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media ${(props) => props.theme.device.tablet} {
    gap: 20px;
    flex-direction: row;
  }
`;

export const SvgImg = styled.svg`
  width: 90px;
  height: 88px;

  @media ${(props) => props.theme.device.tablet} {
    width: 141px;
    height: 138px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 28px;
    text-align: start;
  }
`;

export const Text = styled.p`
  width: 100%;
  text-align: center;

  @media ${(props) => props.theme.device.tablet} {
    text-align: start;
    width: 619px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 433px;
  }
`;

export const NavLinkStyled = styled(NavLinkAccent)`
  width: 100%;
  font-size: 24px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  height: 93px;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.darkBlue};

  border-radius: 40px;

  @media ${(props) => props.theme.device.mobile} {
    min-width: 326px;
  }


  @media ${(props) => props.theme.device.tablet} {
    min-width: 358px;
  }

`;
