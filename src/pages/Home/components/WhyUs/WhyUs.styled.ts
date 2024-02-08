import styled from "styled-components";
import cloudLeft from '../../assets/cloud-left.svg'
import cloudRight from '../../assets/cloud-right.svg'
import { NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import Container from "../../../../shared/Container";
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";

export const SectionStyled = styled.section`
padding-top: 100px;
padding-bottom: 149px;
position: relative;

&::before {
    content: '';
    background-image: url(${cloudLeft});
    background-repeat: no-repeat;
    width: 430px;
    height: 366px;

    position: absolute;
    left: 0;
    top: 236px;
}

&::after {
    content: '';
    background-image: url(${cloudRight});
    background-repeat: no-repeat;
    width: 430px;
    height: 366px;

    position: absolute;
    right: -207px;
    top: 236px;
}
`

export const FlexContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleStyled = styled(SectionTitle)`
margin-bottom: 80px;`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 60px;
    margin-bottom: 100px;
    `

export const ItemStyled = styled.li`
display: flex;
align-items: center;
gap: 20px;
`

export const SvgImg = styled.svg`
width: 141px;
height: 138px;
`

export const Title = styled.h3`
font-size: 28px;
margin-bottom: 20px;
`

export const Text = styled.p`
width: 433px;`

export const NavLinkStyled = styled(NavLinkTrsp)`
font-size: 24px;
font-weight: 700;
min-width: 358px;
background-color: #FFCD1E;
padding: 33px 65px;
border-radius: 40px;
`

