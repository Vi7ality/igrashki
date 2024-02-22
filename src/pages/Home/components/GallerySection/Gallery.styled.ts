import styled from "styled-components";
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";
import bgImg from '../../assets/gallery-bg.svg'


export const SectionStyled = styled.section`
padding-top: 58px;
padding-bottom: 87px;
background-image: url(${bgImg});
background-position: center;
height: 620px;
background-size: 1850px 620px;
 @media ${(props) => props.theme.device.tablet} {
    padding-top: 71px;
    padding-bottom: 68px;
        height: 835px;
    background-size: 2500px 835px;
 }

  @media ${(props) => props.theme.device.desktop} {
    padding-top: 110px;
    padding-bottom: 164px;
    height: 915px;
    background-size: 2930px 915px;
    
  }
`

export const TitleStyled = styled(SectionTitle)`
margin-bottom: 30px;

@media ${(props) => props.theme.device.tablet} {
margin-bottom: 50px;
}

@media ${(props) => props.theme.device.desktop} {
    margin-bottom: 60px;
}
`