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
  @media ${p => p.theme.device.tablet} {
    border-radius: 26px;
  }
`;

export const ContentWrap = styled.div`
  padding: 15px 5px 20px 15px;
`;

export const ToyName = styled.p`
  margin-bottom: 40px;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.div`
  border-radius: 10px;
  padding: 6px 10px;
  background-color: ${p => p.theme.colors.bgWhite};
  font-weight: 600;
  font-size: 12px;
`;
