import styled from 'styled-components';

export const ToyItemStyled = styled.li`
  width: 350px;
  height: 365px;
  border-radius: 10px;
  background-color: ${p => p.theme.colors.white};
  padding: 5px;

  @media ${p => p.theme.device.tablet} {
    border-radius: 30px;
    width: 300px;
  }
  @media ${p => p.theme.device.desktop} {
    width: 310px;
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 201px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${p => p.theme.device.tablet} {
    border-radius: 26px;
  }
`;

export const ContentWrap = styled.div`
  padding: 15px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 159px;
`;

export const ToyName = styled.p`
  margin-bottom: auto;
  color: ${p => p.theme.colors.darkBlue};
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const FlexContainer = styled.div`
display: flex;
gap: 10px;
`


;
