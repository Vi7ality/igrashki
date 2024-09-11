import Slider from 'react-slick';
import styled from 'styled-components';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import defaultImg from '../../assets/default-toy-image.svg';

export const SliderStyled = styled(Slider)`
  &.slick-slider {
    width: 100%;
    height: 100%;
  }

  .slick-list {
    width: 100%;
    /* height: 100%; */
  }

  .slick-prev {
    left: 10px;
    width: 40px;
    height: 40px;
    z-index: 9;
    &:before {
      content: '';
      background-image: url(${arrowLeft});
      display: block;
      width: 40px;
      height: 40px;
    }
  }

  .slick-next {
    right: 10px;
    width: 40px;
    height: 40px;
    &:before {
      content: '';
      background-image: url(${arrowRight});
      fill: red;
      display: block;
      width: 40px;
      height: 40px;
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    position: static;
    margin-top: 20px;
    @media ${p => p.theme.device.mobileOnly} {
      bottom: -39px;
    }
    @media ${p => p.theme.device.desktop} {
      bottom: -96px;
    }
  }

  .slick-thumb {
    display: flex !important;
    flex-wrap: wrap;
  }

  .slick-dots li {
    border-radius: 30px;
    overflow: hidden;
    background-color: ${p => p.theme.colors.white};
    @media ${p => p.theme.device.mobileOnly} {
      width: 18px;
      height: 18px;
    }

    @media ${p => p.theme.device.tablet} {
      width: 76px;
      height: 76px;
    }
    @media ${p => p.theme.device.desktop} {
      width: 112px;
      height: 112px;
    }

    padding: 0;
    margin-right: 15px;
    margin-left: 0;
  }

  .slick-dots li button {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .slick-dots li button:before {
    font-size: 18px;
    line-height: 18px;
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    content: '•';
    text-align: center;
    opacity: 100;
    color: #d8defb;
  }

  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #46409c;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  background-image: url(${defaultImg});
  background-position: center;
  background-size: cover;
  @media ${p => p.theme.device.tablet} {
    border-radius: 15px;
  }
  @media ${p => p.theme.device.tablet} {
    border-radius: 30px;
  }

  background-color: ${p => p.theme.colors.white};
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: auto 0;

  width: 350px;
  height: 350px;
  @media ${p => p.theme.device.tablet} {
    width: 458px;
    height: 458px;
  }
  @media ${p => p.theme.device.desktop} {
    width: 640px;
    height: 100%;
  }
`;

export const MiniatureLink = styled.a`
  background-image: url(${defaultImg});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiniatureImg = styled.img`
  @media ${p => p.theme.device.tablet} {
    max-width: 76px;
    max-height: 76px;
  }
  @media ${p => p.theme.device.desktop} {
    max-width: 112px;
    max-height: 112px;
  }
`;
