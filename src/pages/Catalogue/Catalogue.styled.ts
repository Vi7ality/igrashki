import styled from 'styled-components';

export const SectionStyled = styled.section`
  padding-top: 36px;
  padding-bottom: 72px;

  @media ${p => p.theme.device.tablet} {
    padding-top: 92px;
    padding-bottom: 76px;
  }
  @media ${p => p.theme.device.desktop} {
    padding-top: 60px;
    padding-bottom: 100px;
  }
`;

export const PageTitle = styled.h1`
font-size: 36px;
margin-bottom: 20px;
text-align: center;
@media ${p => p.theme.device.tablet} {
font-size: 68px;
margin-bottom: 40px;
}
`

export const ToyList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
`
