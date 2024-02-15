import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media ${props => props.theme.device.mobile} {
    padding-left: 10px;
    padding-right: 10px;
    width: ${props => props.theme.size.mobile};
  }

  @media ${props => props.theme.device.tablet} {
    width: ${props => props.theme.size.tablet};
    padding-left: 20px;
    padding-right: 20px;
  }
    @media ${props => props.theme.device.desktop} {
    width: ${props => props.theme.size.desktop};

  }
`;
