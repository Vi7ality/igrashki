import styled from "styled-components";
import waveLine from "../../assets/wave-line.svg";

export const SectionStyled = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row-reverse;
    width: 878px;

    margin-bottom: 81px;
  }
`;

export const FlexWrap = styled.div`
  @media ${(props) => props.theme.device.tablet} {
    padding-top: 44px;
    padding-bottom: 68px;
  }
`;

export const TextStyled = styled.p`
  font-size: 24px;
  margin-top: 20px;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 28px;
  }
`;

export const CollageImg = styled.img`
  width: 350px;
  height: 243px;

  @media ${(props) => props.theme.device.tablet} {
    width: 460px;
    height: 319px;
  }
`;

export const ContentBottom = styled.div`
  display: flex;

  @media ${props => props.theme.device.mobile} {
    flex-direction: column;
    gap: 98px;
  }

  @media ${props => props.theme.device.tablet}{
    width: 923px;
    gap: 45px;
  }


`;

export const WrapText = styled.div`
  position: relative;
  &::after {
    content: "";
    background-image: url(${waveLine});
    width: 282px;
    height: 21px;
    position: absolute;
    left: 0;
    bottom: -61px;

    @media ${(props) => props.theme.device.tablet}{
        bottom: 0;
    }
  }

   @media ${(props) => props.theme.device.tablet} {
    width: 460px;
   }
`;

export const TextBold = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 24px;

   @media ${(props) => props.theme.device.tablet} {
    font-size: 28px;
   }
`;
export const BearImg = styled.img`
  width: 346px;
  height: 339px;

  @media ${(props) => props.theme.device.tablet} {
    width: 418px;
  height: 411px;
  }
`;
