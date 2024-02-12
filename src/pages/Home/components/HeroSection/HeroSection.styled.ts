import styled from "styled-components";
import { NavLinkStyled, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import bgImage from '../../assets/home-hero-bg.svg'
import Container from "../../../../shared/Container";

export const SectionStyled = styled.section`
width: 100%;
padding-top: 245px;
padding-bottom: 218px;
background-image: url(${bgImage});
fill: #46409C;
    background-repeat: no-repeat;
    background-size: cover;
`

export const ContainerStyled = styled(Container)`
position: relative;
`

export const Title = styled.h1`
font-weight: ${props => props.theme.fontWeights.bold};
font-size: 68px; 
line-height: 0.897;
color: ${props => props.theme.colors.white};

margin-bottom: 30px;

span {
    color: #FFCD1E;
}
`
export const TextStyled = styled.p`
font-size: 28px; 
line-height: 1.27;
color: ${props => props.theme.colors.white};
max-width: 500px;

margin-bottom: 70px;

span {
   font-weight: ${props => props.theme.fontWeights.bold}; 
}
`

export const FlexCont = styled.div`
display: flex;
gap: 20px;
`
export const LinkStyled = styled(NavLinkStyled)`
font-size: 20px;
line-height: 1.185;
font-weight: 600; 
color: ${props => props.theme.colors.baseBlue};
min-width: 280px;
`

export const LinkTrsp = styled(NavLinkTrsp)`
color: ${props => props.theme.colors.white};
background-color: transparent;
display: flex;
align-items: center;

padding: 21px 28px;

 svg {
    width: 28px;
    height: 28px;
    margin-right: 10px;
 }
`
export const BearsSvg = styled.svg`
width: 361px;
height: 513px;
position: absolute;
bottom: -219px;
right: 250px;
`
