import styled from "styled-components";
import Container from "../../../../shared/Container";
import { NavLink } from "react-router-dom";
import bgImg from "../../assets/lines-bg.svg";
import lines from "../../assets/howworks_lines.svg";
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";

export const SectionStyled = styled.section`
  padding-top: 48px;
  padding-bottom: 40px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 65px;
  }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 140px;
    padding-bottom: 100px;
  }
`;
export const ContainerBgImage = styled(Container)`
  position: relative;

  &::before {
    @media ${(props) => props.theme.device.tablet} {
      content: "";
      background-image: url(${bgImg});
      background-size: 1214px 414px;
      background-repeat: no-repeat;
      width: 1600px;
      height: 414px;
      position: absolute;
      top: 0;
      left: -120px;
      z-index: -1;
    }

    @media ${(props) => props.theme.device.desktop} {
      background-size: 1770px 588px;
      width: 1770px;
      height: 588px;
       left: -220px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 350px;
  height: 837px;
  margin: 0 auto;
  padding: 44px 30px 45px 30px;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 30px;

  position: relative;
  z-index: 9;

  @media ${(props) => props.theme.device.tablet} {
    width: 940px;
    height: 471px;
    padding: 49px 40px 59px 40px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 1300px;
    height: 588px;
    padding: 61px 50px 101px 53px;
    border-radius: 60px;
  }
`;

export const TitleStyled = styled(SectionTitle)`
  margin-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    margin-bottom: 47px;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin-bottom: 67px;
  }
`;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 50px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }

  @media ${(props) => props.theme.device.desktop} {
    gap: 102px;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  &:not(:last-child) {
    &::after {
      @media ${(props) => props.theme.device.tablet} {
        content: "";
        background-image: url(${lines});
        background-size: 70px 10px;
        width: 70px;
        height: 10px;
        position: absolute;
        top: 60px;
        right: -65px;
      }

      @media ${(props) => props.theme.device.desktop} {
        background-size: 105px 20px;
        width: 105px;
        height: 20px;
        top: 83px;
        right: -105px;
      }
    }
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 330px;
  }
`;

export const SvgStyled = styled.svg`
  width: 120px;
  height: 101px;

  margin-bottom: 20px;

  @media ${(props) => props.theme.device.tablet} {
    width: 150px;
    height: 126px;
    margin-bottom: 36px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 210px;
    height: 176px;
    margin-bottom: 50px;
  }
`;

export const TextStyled = styled.p`
  font-size: 18px;
  line-height: 1.185;

  text-align: center;
`;

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;
