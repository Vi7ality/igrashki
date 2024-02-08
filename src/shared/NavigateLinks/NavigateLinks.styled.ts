import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkTrsp = styled(NavLink)`
text-align: center;
border: 2px solid 
#FFFFFF;
border-radius: 30px;
padding: 23px 15px 23px 15px;

font-size: 20px;
font-weight: 600;

`

export const NavLinkStyled = styled(NavLinkTrsp)`
background-color: #FFFFFF;
border: none;
`
export const NavLinkAccent = styled(NavLink)`
text-align: center;
border: none;
border-radius: 30px;
background-color: #FFCD1E;
padding: 23px 15px 23px 15px;

font-size: 20px;
font-weight: 600;
`
