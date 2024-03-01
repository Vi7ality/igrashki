import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkTrsp = styled(NavLink)`
display:flex;
justify-content: center;
align-items: center;
border: 2px solid 
${props => props.theme.colors.white};
color: ${(props) => props.theme.colors.white};
border-radius: 20px;
font-size: 16px;
font-weight: 600;
width: 250px;
height: 48px;

@media ${(props) => props.theme.device.tablet} {
    border-radius: 30px;
    font-size: 20px;
    height: 70px;
}

@media ${(props) => props.theme.device.desktop} {
    width: 280px;
    font-size: 20px;
}
`

export const NavLinkStyled = styled(NavLinkTrsp)`
background-color: ${props => props.theme.colors.white};
color: ${(props) => props.theme.colors.darkBlue};
border: none;

@media ${props => props.theme.device.tablet} {
    width: 241px;
}

@media ${props => props.theme.device.desktop} {
    width: 280px;
}

`
export const NavLinkAccent = styled(NavLinkTrsp)`
background-color: ${props => props.theme.colors.accent};
color: ${(props) => props.theme.colors.baseBlue};
border: none;
`
