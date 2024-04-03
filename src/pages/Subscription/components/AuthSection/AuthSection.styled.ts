import styled from "styled-components";

export const SectionStyled = styled.section`
border-radius: 15px 15px 0 0;
padding: 30px 20px;
background-color: ${p => p.theme.colors.white};
width: 370px;
margin-left: auto;
margin-right: auto;

@media ${p => p.theme.device.tablet} {
border-radius: 30px 0 0 30px;
width: 470px;
padding: 40px 42px;
margin-left: 0;
margin-right: 0;
}

@media ${p => p.theme.device.desktop} {
    width: 540px;
}
`