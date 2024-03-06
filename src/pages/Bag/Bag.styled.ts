import styled from "styled-components";
import Container from "../../shared/Container";

export const FlexContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;

`
export const PageTitle = styled.h1`
font-size: 36px;
color: ${props => props.theme.colors.darkBlue};
margin-top: 36px;

@media ${props => props.theme.device.tablet} {
    font-size: 68px;
    margin-top: 60px;
}
`