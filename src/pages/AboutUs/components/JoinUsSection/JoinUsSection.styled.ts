import styled from "styled-components";
import Container from "../../../../shared/Container";
import { NavLinkAccent, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";
import LinesTb from '../../assets/form-lines_tb.svg'

export const SectionStyled = styled.section`
padding-top: 30px;
padding-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

export const ContentContainer = styled(Container)`
border-radius: 30px;
  background-color: ${(props) => props.theme.colors.white};
  width: 350px;
  padding: 46px 21px 35px 22px;

  @media ${(props) => props.theme.device.tablet} {
    width: 940px;
    padding: 46px 70px;
    position: relative;

    &::before {
      content: "";
        background-image: url(${LinesTb});
        background-repeat: no-repeat;
      width: 1226px;
      height: 350px;
      position: absolute;
      z-index: -1;
        top: 24px;
      left: -153px;
      /* @media ${(props) => props.theme.device.desktop} {
        width: 1750px;
        height: 370px;

        top: 44px;
        left: -235px;
      } */
    }
}
`

export const JoinTitle = styled.h2`
text-align: center;
font-size: 28px;
margin-bottom: 30px;

@media ${(props) => props.theme.device.tablet}  {
    font-size: 48px;
    margin-bottom: 50px;
}
`

export const LinkList = styled.ul`
display: flex; 
justify-content: center;
align-items: center;
gap: 20px;

@media ${props => props.theme.device.mobile} {
    flex-direction: column;
}
`
export const AccentLinkStyled = styled(NavLinkAccent)`

@media ${(props) => props.theme.device.tablet}  {
    min-width: 307px;
}
`

export const TrspLinkStyled = styled(NavLinkTrsp)`
color: ${props => props.theme.colors.baseBlue};
border-color: ${props => props.theme.colors.baseBlue};

@media ${(props) => props.theme.device.tablet}  {
    min-width: 280px;
}
`