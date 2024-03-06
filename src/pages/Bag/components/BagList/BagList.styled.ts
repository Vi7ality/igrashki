import styled from "styled-components";
import { NavLinkAccent, NavLinkTrsp } from "../../../../shared/NavigateLinks/NavigateLinks.styled";

export const ListWrap = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  padding: 20px 10px 32px 10px;
  margin-top: 20px;
  margin-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    border-radius: 30px;
    margin-top: 40px;
    margin-bottom: 50px;
    padding: 30px 40px 40px 40px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 1080px;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  @media ${(props) => props.theme.device.mobileOnly} {
    gap: 10px;
    flex-direction: column;
  }

  @media ${(props) => props.theme.device.tablet} {
    margin-top: 40px;
  }
`;

export const CalcText = styled.p`
  color: ${(props) => props.theme.colors.black};
  order: 1;

  @media ${(props) => props.theme.device.tablet} {
    order: 2;
    margin-left: 174px;
    font-size: 18px;
  }

  @media ${(props) => props.theme.device.desktop} {
    margin-left: 314px;
  }

  span {
    font-weight: 600;
  }
`;

export const LinkAccent = styled(NavLinkAccent)`
  width: 100%;
  height: 48px;
  font-size: 16px;
  order: 2;

  @media ${(props) => props.theme.device.tablet} {
    order: 3;
    width: 231px;
    margin-left: 40px;
  }
`;

export const LinkTrsp = styled(NavLinkTrsp)`
  color: ${(props) => props.theme.colors.baseBlue};
  border-color: ${(props) => props.theme.colors.baseBlue};
  width: 100%;
  height: 48px;
  order: 3;

  @media ${(props) => props.theme.device.tablet} {
    order: 1;
    width: 253px;
    font-size: 16px;
  }
`;
