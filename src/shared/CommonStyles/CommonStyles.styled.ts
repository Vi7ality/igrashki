import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 36px;
  line-height: 1.3;
  text-align: center;

  @media ${(props) => props.theme.device.tablet} {
    font-size: 54px;
    line-height: 1.3;
  }
`;
