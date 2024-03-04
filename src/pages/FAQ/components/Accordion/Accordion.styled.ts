import styled from "styled-components";

export const AccordionWrap = styled.div`
box-sizing: border-box;
width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 15px;

  /* .open {
    padding-top: 20px;
    font-size: 16px;
  } */
`

export const AccordionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

    h2 {
    font-size: 18px;
    font-weight: 600;
  }
`
export const IconWrapper = styled.div`
transition: transform 0.3s ease;

&.open {
    transform: rotate(180deg);
}
`