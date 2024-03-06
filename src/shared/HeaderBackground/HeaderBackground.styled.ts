import styled from "styled-components";
import bgImgMb from './assets/hero-bg_mb.svg'
import bgImgTb from './assets/hero-bg_tb.svg'
import bgImgDesk from './assets/hero-bg_desk.svg'

export const BackgroundWrap = styled.div`
width: 100%;
height: 60px;
background-image: url(${bgImgMb});
background-size: cover;

@media ${props => props.theme.device.tablet} {
    height: 85px;
    background-image: url(${bgImgTb});
}

@media ${props => props.theme.device.desktop} {
    height: 117px;
    background-image: url(${bgImgDesk});
}
`