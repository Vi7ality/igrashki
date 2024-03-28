import styled from "styled-components";

export const SectionStyled = styled.section`
border-radius: 15px 15px 0 0;
padding: 30px 20px;
background-color: ${p => p.theme.colors.white};

@media ${p => p.theme.device.tablet} {
border-radius: 0 30px 30px 0;
padding: 40px 42px;
}

@media ${p => p.theme.device.desktop} {
    
}
`