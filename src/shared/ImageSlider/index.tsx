import { FC } from 'react';
import {
  ImageContainer,
  MiniatureImg,
  MiniatureLink,
  SliderStyled,
} from './ImageSlider.styled';
import { nanoid } from 'nanoid';
import defaultImage from '../../assets/default-toy-image.svg';

const ImageSlider: FC<{ images?: string[] }> = ({ images }) => {
  const customPaging = (i: number) => {
    if (images?.length !== 0) {
      return (
        <MiniatureLink key={nanoid(6)}>
          <MiniatureImg
            key={nanoid(6)}
            src={`${images?.[i]}`}
            alt={`Slide ${i + 1}`}
          />
        </MiniatureLink>
      );
    } else {
      return (
        <MiniatureLink key={nanoid(6)}>
          <MiniatureImg
            key={nanoid(6)}
            src={defaultImage}
            alt={`Slide ${i + 1}`}
          />
        </MiniatureLink>
      );
    }
  };

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 20000,
        settings: {
          customPaging,
        },
      },
      {
        breakpoint: 979,
        settings: {},
      },
    ],
  };

  return (
    <>
      <SliderStyled {...settings}>
        {images?.length !== 0 ? (
          images?.map(image => (
            <ImageContainer key={nanoid(6)}>
              <img src={image} alt="toy photo"></img>
            </ImageContainer>
          ))
        ) : (
          <ImageContainer>
            <img
              src={defaultImage}
              style={{ width: '100%' }}
              alt="default toy photo"
            ></img>
          </ImageContainer>
        )}
      </SliderStyled>
    </>
  );
};

export default ImageSlider;
