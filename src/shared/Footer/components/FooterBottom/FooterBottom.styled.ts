import styled from "styled-components";
import Container from "../../../../shared/Container";

export const FooterBottomStyled = styled.div`
  padding-top: 26px;
  padding-bottom: 26px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 32px;
  padding-bottom: 32px;
  }

   @media ${(props) => props.theme.device.desktop} {
      padding-top: 48px;
  padding-bottom: 53px;
  }

  background-color: ${(props) => props.theme.colors.bgDark};
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;

  @media ${(props) => props.theme.device.tablet} {
    flex-wrap: nowrap;
  }
`;

export const IconList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;

  @media ${(props) => props.theme.device.tablet} {
    margin-bottom: 0;
    margin-right: 30px;
  }
`;
export const TeplitsiaIco = styled.svg`
  width: 71px;
  height: 29px;

  @media ${(props) => props.theme.device.desktop} {
    width: 93px;
    height: 37px;
  }
`;
export const GrowWithYouIco = styled.svg`
  width: 34px;
  height: 31px;

  @media ${(props) => props.theme.device.desktop} {
    width: 42px;
    height: 38px;
  }
`;
export const UnicefIco = styled.svg`
  width: 95px;
  height: 23px;

  @media ${(props) => props.theme.device.desktop} {
    width: 131px;
    height: 32px;
  }
`;
export const TextStyled = styled.p`
  width: 970px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.mutedGrey};
`;
