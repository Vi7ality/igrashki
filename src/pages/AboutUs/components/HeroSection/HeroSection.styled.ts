import styled from "styled-components";
import bgImgMb from "../../assets/hero-bg_mb.svg";

export const SectionStyled = styled.section`
  background-image: url(${bgImgMb});
  background-position: center;
  fill: ${(props) => props.theme.colors.baseBlue};
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 115px;
  padding-bottom: 76px;
`;


export const PageTitle = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
`;

export const ImgStyled = styled.img`
width: 310px;
height: 122px;

position: absolute;
bottom: -152px;
left: 30px;
z-index: 9;
`