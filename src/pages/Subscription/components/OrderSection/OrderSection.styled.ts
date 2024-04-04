import styled from "styled-components";

export const SectionStyled = styled.section`
border-radius: 0 0 15px 15px;
padding: 30px 20px;
background-color: ${p => p.theme.colors.bgWhite2};
width: 370px;
margin-left: auto;
margin-right: auto;

@media ${p => p.theme.device.tablet} {
border-radius: 0 30px 30px 0;
width: 470px;
padding: 40px 42px;
margin-left: 0;
margin-right: 0;
}

@media ${p => p.theme.device.desktop} {
    width: 540px;
}
`

export const SectionTitle = styled.h2`
font-size: 28px;

margin-bottom: 20px;
`

