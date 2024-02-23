import styled from "styled-components";
import waveLine from '../../assets/wave-line.svg'

export const SectionStyled = styled.section`
padding-top: 30px;
padding-bottom: 30px;
`

export const ContentTop = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

margin-bottom: 40px;
`

export const TextStyled = styled.p`
font-size: 24px;
margin-top: 20px;
`

export const ImageStyled = styled.img`
width: 350px;
height: 243px;
`

export const ContentBottom = styled.div`
display: flex;
flex-direction: column;
gap: 98px;

`

export const WrapText = styled.div`
position: relative;
&::after {
    content: '';
    background-image: url(${waveLine});
    width: 282px;
    height: 21px;
    position: absolute;
    
    left: 0;
    bottom: -61px;
}
`

export const TextBold = styled.p`
font-weight: ${props => props.theme.fontWeights.bold};
font-size: 24px;
`
export const BearImg = styled.img`
width: 346px;
height: 339px;
`