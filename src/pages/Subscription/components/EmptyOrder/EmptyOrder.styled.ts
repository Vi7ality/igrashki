import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const TextStyled = styled.p`
font-size: 18px;
`

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.baseBlue};
`;

// export const ImgContainer = styled.div`
// @media ${p => p.theme.device.mobileOnly} {
//     height: 220px;
// }
// display: flex;
// width: 100%;
// height: 100%;
// `

export const BoxImage = styled.img`
width: 200px;
height: 130px;
margin-left: auto;
margin-right: auto;
margin-top: 75px;

@media ${p => p.theme.device.tablet} {
width: 334px;
height: 216px;

margin-top: 300px;
}

`