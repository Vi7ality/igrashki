import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-top: 36px;
  margin-bottom: 20px;

  @media ${(p) => p.theme.device.tablet} {
    font-size: 68px;
    margin-top: 92px;
    margin-bottom: 44px;
  }

  @media ${(p) => p.theme.device.desktop} {
    margin-top: 60px;
  }
`;

export const SubscrContainer = styled.div`
  @media ${(p) => p.theme.device.tablet} {
    display: flex;
    justify-content: center;
  }
`;
