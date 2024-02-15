import styled from "styled-components";
import whaleBg from './assets/whale-bg.svg'

export const FooterStyled = styled.footer`
margin: 0;
padding-top: 289px;
height: auto;
&::before {
    content: '';
    background-image: url(${whaleBg});
        background-repeat: no-repeat;
            background-position: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 288px;

}`