import styled from "styled-components";

export const SectionStyled = styled.section`
border-radius: 0 0 15px 15px;
padding: 30px 20px;
background-color: ${p => p.theme.colors.bgWhite2};
`

export const SectionTitle = styled.h2`
font-size: 28px;

margin-bottom: 20px;
`

export const ToysCount = styled.p`
font-size: 18px;
margin-bottom: 30px;

span {
    font-weight: 700;
    margin-left: 14px;
}
`

export const CartList = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
`