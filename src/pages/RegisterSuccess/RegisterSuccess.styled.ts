import styled from 'styled-components';
import Container from '../../shared/Container';
import { AccentLinkStyled } from '../AboutUs/components/JoinUsSection/JoinUsSection.styled';
import { NavLinkTrsp } from '../../shared/NavigateLinks/NavigateLinks.styled';

export const SectionStyled = styled.section`
  padding-top: 78px;
  padding-bottom: 36px;

  @media ${p => p.theme.device.tablet} {
    padding-top: 113px;
    padding-bottom: 101px;
  }
  @media ${p => p.theme.device.desktop} {
    padding-top: 144px;
    padding-bottom: 78px;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 301px;
  height: 160px;
  margin-bottom: 30px;
  @media ${p => p.theme.device.tablet} {
    width: 391x;
    height: 208px;
    margin-bottom: 35px;
  }
  @media ${p => p.theme.device.desktop} {
    width: 461px;
    height: 246px;
    margin-bottom: 40px;
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

export const LinkWrap = styled.div`
display: flex;
gap: 20px;
@media ${p => p.theme.device.mobileOnly}{
  flex-direction: column;
  gap: 10px;
}
`

export const LinkStyled = styled(NavLinkTrsp)`
  width: 350px;
  color: ${p => p.theme.colors.baseBlue};
  border-color: ${p => p.theme.colors.baseBlue};
  @media ${p => p.theme.device.tablet} {
    width: 245px;
    height: 48px;
    font-size: 16px;
  }
`;

export const AccentLink = styled(AccentLinkStyled)`
  width: 350px;
  @media ${p => p.theme.device.tablet} {
    width: 202px;
    height: 48px;
    font-size: 16px;
  }
`;
