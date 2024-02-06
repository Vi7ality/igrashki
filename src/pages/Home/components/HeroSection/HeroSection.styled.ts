import styled from "styled-components";
import { NavLinkStyled } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import bgImage from '../../assets/home-hero-bg.svg'

export const SectionStyled = styled.section`
width: 100%;
padding-top: 245px;
padding-bottom: 218px;
background-color: #46409C;
background-image: url(${bgImage});
fill: #46409C;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Title = styled.h1`
font-weight: 700;
font-size: 68px; 
line-height: 0.897;
color: #FFFFFF;

margin-bottom: 30px;

span {
    color: #FFCD1E;
}
`
export const TextStyled = styled.p`
font-weight: 400;
font-size: 28px; 
line-height: 1.27;
color: #FFFFFF;
max-width: 500px;

margin-bottom: 70px;

span {
   font-weight: 700; 
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
color: #46409C;
width: 280px;
`

export const LinkTrsp = styled(LinkStyled)`
color: #FFFFFF;
background-color: transparent;
`

