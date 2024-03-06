import styled from "styled-components";
import { NavLinkAccent } from "../../../../shared/NavigateLinks/NavigateLinks.styled";

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;

  @media ${(props) => props.theme.device.tablet} {
    margin-top: 90px;
  }
`;

export const BoxImg = styled.img`
  width: 225px;
  height: 145px;

  @media ${(props) => props.theme.device.tablet} {
    width: 273px;
    height: 176px;
  }
`;

export const TextStyled = styled.p`
  font-size: 18px;
  text-align: center;

  margin-top: 40px;
`;

export const LinkStyled = styled(NavLinkAccent)`
  width: 187px;
  height: 48px;
  font-size: 16px;

  margin-top: 30px;
  margin-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    width: 272px;
    height: 70px;
    font-size: 16px;

    margin-top: 40px;
    margin-bottom: 28px;
  }

  @media ${(props) => props.theme.device.tablet} {
    width: 282px;
    height: 70px;
    font-size: 20px;

    margin-bottom: 78px;
  }
`;
