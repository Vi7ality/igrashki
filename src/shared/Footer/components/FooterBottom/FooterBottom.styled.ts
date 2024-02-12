
import styled from "styled-components";
import Container from "../../../../shared/Container";


export const FooterBottomStyled = styled.div`
padding-top: 48px;
padding-bottom: 53px;
background-color: ${props => props.theme.colors.bgDark};
`

export const FlexContainer = styled(Container)`
display: flex;`

export const IconList = styled.ul`
display: flex;
gap: 30px;
margin-right: 30px;
` 
export const TeplitsiaIco = styled.svg`
width: 93px;
height: 37px;
`
export const GrowWithYouIco = styled.svg`
width: 42px;
height: 38px;
`
export const UnicefIco = styled.svg`
width: 131px;
height: 32px;
`
export const TextStyled = styled.p`
width: 970px;
font-size: 12px;
color: ${props => props.theme.colors.mutedGrey};
`
