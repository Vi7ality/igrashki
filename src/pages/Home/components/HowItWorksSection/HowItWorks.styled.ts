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

  /* &::before {
    content: '';
    background-image: url(${bgImg});
    width: 1770px;
    height: 588px;
    position: absolute;
    top: 0;
    left: -235px;
    z-index: -1;
} */
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
    padding: 49px 25px 59px 60px;
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

  @media ${(props) => props.theme.device.desktop} {
    flex-direction: row;
    gap: 102px;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  @media ${(props) => props.theme.device.tablet} {
    &:not(:last-child) {
      &::after {
        content: "";
        background-image: url(${lines});
        width: 105px;
        height: 15px;
        position: absolute;
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

  @media ${(props) => props.theme.device.desktop} {
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
