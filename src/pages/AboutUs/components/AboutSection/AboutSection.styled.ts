import styled from "styled-components";
import Container from "../../../../shared/Container";

export const SectionStyled = styled.section`
padding-top: 106px;
padding-bottom: 30px;
`

export const ContentContainer = styled(Container)`
border-radius: 30px;
background-color: ${props => props.theme.colors.white};
width: 350px;
padding: 41px 20px;
`
export const TextStyled = styled.p`
font-size: 18px;

margin-top: 30px;

span {
    font-weight: 700;
}
`
