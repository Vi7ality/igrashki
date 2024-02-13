import styled from "styled-components";
import { SectionTitle } from "../../../../shared/CommonStyles/CommonStyles.styled";
import bgImg from '../../assets/gallery-bg.svg'


export const SectionStyled = styled.section`
padding-top: 110px;
padding-bottom: 164px;

background-image: url(${bgImg});
`

export const TitleStyled = styled(SectionTitle)`
margin-bottom: 60px;
`