import styled from "styled-components";
import Container from "../../../../shared/Container";
import { NavLink } from "react-router-dom";
import bgImg from "../../assets/lines-bg.svg";
import lines from '../../assets/howworks_lines.svg'
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";

export const SectionStyled = styled.section`
    padding-top: 140px;
    padding-bottom: 100px; 
`
export const ContainerBgImage = styled(Container)`
position: relative;

&::before {
    content: '';
    background-image: url(${bgImg});
    width: 1770px;
    height: 588px;
    position: absolute;
    top: 0;
    left: -145px;
    z-index: -1;
}
`
export const ContentContainer = styled.div`
width: 1300px;
height: 588px;
margin: 0 auto;

padding: 61px 50px 101px 53px;

background-color: ${props => props.theme.colors.white};
border-radius: 60px;

position: relative;
z-index: 9;
`

export const TitleStyled = styled(SectionTitle)`
margin-bottom: 67px;`

export const ListStyled = styled.ul`
display: flex;
justify-content: center;
gap: 102px;
`

export const ItemStyled = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 330px;
position: relative;

&:not(:last-child) {
    &::after{
        content: '';
        background-image: url(${lines});
        width: 105px;
        height: 15px;
        position: absolute;
        top: 83px;
        right: -105px;
    }
}
`

export const SvgStyled = styled.svg`
width: 210px;
height: 176px;

margin-bottom: 50px;`

export const TextStyled = styled.p`
font-size: 18px;
line-height: 1.185;

text-align: center;
`

export const LinkStyled = styled(NavLink)`
display: inline-block;
font-weight: ${props => props.theme.fontWeights.bold};`