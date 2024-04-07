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
  padding: 15px 15px 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 159px;
`;

export const ToyName = styled.p`
  margin-bottom: 40px;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FlexContainer = styled.div`
display: flex;
`
export const IconWrap = styled.div`
position: relative;
width: 28px;
height: 28px;
margin-right: 10px;
`

export const AgeIcon = styled.svg`
width: 28px;
height: 28px;
`

export const AgeText = styled.p`
position: absolute;
bottom: 0;
left: 0;
z-index:9;
font-weight: 600;
font-size: 12px;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`

export const Category = styled.div`
  border-radius: 10px;
  padding: 6px 10px;
  background-color: ${p => p.theme.colors.bgWhite};
  font-weight: 600;
  font-size: 12px;
`;
