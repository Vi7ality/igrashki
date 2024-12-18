import styled from 'styled-components';
import Container from '../../../../shared/Container';
import bgImg from '../../assets/join-lines_bg.svg';
import { SectionTitle } from '../../../../shared/CommonStyles/CommonStyles.styled';
import {
  NavLinkAccent,
  NavLinkTrsp,
} from '../../../../shared/NavigateLinks/NavigateLinks.styled';
import svgImg from '../../assets/penguins.svg';
import svgMbImg from '../../assets/penguins-mb.svg';
import svgTbImg from '../../assets/penguins-tb.svg';

export const SectionStyled = styled.section`
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 80px;
  @media ${props => props.theme.device.tablet} {
    padding-top: 104px;
    padding-bottom: 40px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-top: 236px;
    padding-bottom: 100px;
  }
`;
export const ContainerBgImage = styled(Container)`
  @media ${props => props.theme.device.tablet} {
    position: relative;
    &::before {
      content: '';
      background-image: url(${bgImg});
      background-repeat: no-repeat;
      background-size: 1770px 400px;
      width: 1770px;
      height: 400px;
      position: absolute;
      top: 19px;

      left: -400px;
      z-index: -1;

      @media ${props => props.theme.device.desktop} {
        background-size: 1770px 515px;
        width: 1770px;
        height: 515px;
        top: -17px;
        left: -235px;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 493px;
  margin: 0 auto;

  padding: 42px 23px 373px 23px;

  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;

  position: relative;
  z-index: 9;

  @media ${props => props.theme.device.mobile} {
    width: 350px;
  }

  @media ${props => props.theme.device.tablet} {
    width: 940px;
    height: 438px;
    padding: 97px 341px 97px 44px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 1300px;
    height: 462px;
    border-radius: 60px;
    padding: 109px 632px 109px 109px;
  }
`;

export const SectionTitleStyled = styled(SectionTitle)`
  margin-bottom: 30px;
  font-size: 28px;

  & span {
    display: none;
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 48px;
    margin-bottom: 50px;
    text-align: start;

    & span {
      display: inline;
    }
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
export const JoinNavLink = styled(NavLinkAccent)`
  font-size: 16px;
  color: ${props => props.theme.colors.darkBlue};

  @media ${props => props.theme.device.tablet} {
    width: 195px;
    font-size: 20px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 235px;
  }
`;

// export const GiftSvg = styled.svg`
//   display: none;
//   @media ${(props) => props.theme.device.tablet} {
//     display: block;
//     width: 28px;
//     height: 28px;
//   }
//   margin-right: 10px;
// `;

export const ShareNavLink = styled(NavLinkTrsp)`
  border-color: ${props => props.theme.colors.baseBlue};
  color: ${props => props.theme.colors.baseBlue};
  transition: background-color ${p => p.theme.transition.duration}
      ${p => p.theme.transition.function},
    color ${p => p.theme.transition.duration}
      ${p => p.theme.transition.function},
    border-color ${p => p.theme.transition.duration}
      ${p => p.theme.transition.function},
    fill ${p => p.theme.transition.duration} ${p => p.theme.transition.function};

  @media (hover: hover) {
    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.baseBlue};
      color: ${props => props.theme.colors.white};
      border-color: ${p => p.theme.colors.baseBlue};
      fill: ${props => props.theme.colors.white};
    }
  }

  @media ${props => props.theme.device.tablet} {
    width: 257px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 280px;
  }
`;

export const PenguinsImg = styled.div`
  background-image: url(${svgMbImg});
  background-repeat: no-repeat;
  width: 331px;
  height: 222px;
  position: absolute;
  bottom: 0;
  right: 0;

  @media ${props => props.theme.device.tablet} {
    background-image: url(${svgTbImg});
    width: 567px;
    height: 381px;
  }

  @media ${props => props.theme.device.desktop} {
    background-image: url(${svgImg});
    width: 688px;
    height: 462px;
  }
`;
