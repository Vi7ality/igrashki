import styled from "styled-components";
import Container from "../../../../shared/Container";

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

    &::before {
      content: "";
      width: 1226px;
      height: 373px;
      /* background-image: url(${bgTbImg}); */
      /* background-size: 1226px 373px; */
      position: absolute;
      z-index: -1;

      top: 43px;
      left: -153px;
      @media ${(props) => props.theme.device.desktop} {
        width: 1750px;
        height: 370px;
        /* background-image: url(${bgDeskImg}); */
        /* background-size: 1750px 370px; */

        top: 44px;
        left: -235px;
      }
    }
}
`

export const JoinTitle = styled.h2`
font-size: 28px;
`