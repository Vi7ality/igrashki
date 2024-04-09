import styled from "styled-components";

export const SectionStyled = styled.section`
border-radius: 15px;
padding: 30px;
background-color: ${({ theme: { colors } }) => colors.white};
`

export const PageTitle = styled.h1`
font-weight: 700;
font-size: 24px;
margin-bottom: 20px;`