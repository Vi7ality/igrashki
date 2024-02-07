import styled from "styled-components";
import Container from "../../../../shared/Container";
import { NavLink } from "react-router-dom";

export const SectionStyled = styled.section`
    padding-top: 140px;
    padding-bottom: 100px; 
`
export const ContentContainer = styled(Container)`
width: 1300px;
height: 588px;

padding: 61px 50px 101px 53px;

background-color: #FFFFFF;
border-radius: 60px;
`

export const SectionTitle = styled.h2`
font-size: 54px;
line-height: 1.296;
text-align: center;

margin-bottom: 67px;
`

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
font-weight: 700;`