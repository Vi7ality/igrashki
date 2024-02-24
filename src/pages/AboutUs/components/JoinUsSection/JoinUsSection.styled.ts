import styled from "styled-components";
import Container from "../../../../shared/Container";
import { NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";

export const SectionStyled = styled.section`
padding-top: 30px;
padding-bottom: 30px;
`

export const ContentContainer = styled(Container)`
border-radius: 30px;
  background-color: ${(props) => props.theme.colors.white};
  width: 350px;
  padding: 46px 21px 35px 22px;

  @media ${(props) => props.theme.device.tablet} {
    width: 940px;
    padding: 61px 45px;
    position: relative;

    /* &::before {
      content: "";
      width: 1226px;
      height: 373px;
      position: absolute;
      z-index: -1;

      top: 43px;
      left: -153px;
      @media ${(props) => props.theme.device.desktop} {
        width: 1750px;
        height: 370px;


        top: 44px;
        left: -235px;
      }
    } */
}
`

export const JoinTitle = styled.h2`
text-align: center;
font-size: 28px;

margin-bottom: 30px;
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
export const TrspLinkStyled = styled(NavLinkTrsp)`
color: ${props => props.theme.colors.baseBlue};
border-color: ${props => props.theme.colors.baseBlue};
`