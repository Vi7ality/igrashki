import styled from "styled-components";

export const AccordionWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1080px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  cursor: pointer;

  @media ${(props) => props.theme.device.tablet} {
    padding: 23px 23px 23px 40px;
  }

  &.open {
    padding-top: 23px;

    @media ${(props) => props.theme.device.tablet} {
      padding-top: 30px;
      padding-bottom: 33px;
    }
  }
`;

export const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: start;
  justify-content: space-between;
  cursor: pointer;

  h2 {
    width: 270px;
    font-size: 18px;
    font-weight: 600;

    @media ${(props) => props.theme.device.tablet} {
      width: 808px;
    }

    @media ${(props) => props.theme.device.desktop} {
      width: 950px;
    }
  }
`;
export const IconWrapper = styled.div`
  transition: transform 0.3s ease;

  &.open {
    transform: rotate(180deg);
  }

  svg {
    width: 24px;
    height: 24px;

    @media ${(props) => props.theme.device.tablet} {
      width: 32px;
      height: 32px;
    }
  }
`;

export const Content = styled.div`
  box-sizing: border-box;
  width: 270px;
  transition: 0.3s ease;
  max-height: 0;
  overflow: hidden;

  @media ${(props) => props.theme.device.tablet} {
    width: 808px;
  }

  @media ${(props) => props.theme.device.desktop} {
    width: 950px;
  }

  &.open {
    margin-top: 10px;
    max-height: 500px;

    @media ${(props) => props.theme.device.tablet} {
      margin-top: 17px;
    }
    p {
      white-space: pre-wrap;
    }
  }
`;
