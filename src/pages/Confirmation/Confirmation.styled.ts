import styled from 'styled-components';
import Container from '../../shared/Container';
import { AccentLinkStyled } from '../AboutUs/components/JoinUsSection/JoinUsSection.styled';

export const SectionStyled = styled.section`
  padding-top: 78px;
  padding-bottom: 36px;

  @media ${p => p.theme.device.tablet} {
    padding-top: 113px;
    padding-bottom: 31px;
  }
  @media ${p => p.theme.device.desktop} {
    padding-top: 118px;
    padding-bottom: 33px;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 180px;
  height: 166px;
  margin-bottom: 30px;
  @media ${p => p.theme.device.tablet} {
    width: 250px;
    height: 230px;
    margin-bottom: 40px;
  }
  @media ${p => p.theme.device.desktop} {
    width: 296px;
    height: 273px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;

  @media ${p => p.theme.device.tablet} {
    font-size: 24px;
  }
`;
export const TextStyled = styled.p`
  text-align: center;
  margin-bottom: 30px;
  @media ${p => p.theme.device.tablet} {
    margin-bottom: 40px;
    width: 600px;
  }
`;
export const LinkStyled = styled(AccentLinkStyled)`
  width: 245px;
  @media ${p => p.theme.device.tablet} {
    width: 330px;
  }
`;
