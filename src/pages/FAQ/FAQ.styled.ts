import styled from "styled-components";

export const SectionStyled = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;

  @media ${(props) => props.theme.device.tablet} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const AccordionConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;