import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;

  @media ${(props) => props.theme.device.mobile} {
    width: ${(props) => props.theme.size.mobile};
  }

  @media ${(props) => props.theme.device.tablet} {
    width: ${(props) => props.theme.size.tablet};
    padding-left: 20px;
    padding-right: 20px;
  }
  @media ${(props) => props.theme.device.desktop} {
    width: ${(props) => props.theme.size.desktop};
  }
`;
