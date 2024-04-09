import Slider from 'react-slick';
import styled from 'styled-components';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

export const SliderStyled = styled(Slider)`
  &.slick-slider {
    width: 640px;
  }

  .slick-list {
    width: 640px;
    height: 640px;
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
      display: block;
      width: 40px;
      height: 40px;
    }
  }

  .slick-dots {
  bottom: -39px;
}

.slick-dots li {
  width: 18px;
  height: 18px;
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
  content: "•";
  text-align: center;
  opacity: 100;
  color: #d8defb;
}

.slick-dots li.slick-active button:before {
  opacity: 0.75;
  color: #46409c;
}

`;

export const ImageConatiner = styled.div`
  width: 640px;
  height: 640px;
  border-radius: 30px;
  background-color: ${p => p.theme.colors.white};
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
