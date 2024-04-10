import { FC } from 'react';
import {
  ImageContainer,
  MiniatureImg,
  MiniatureLink,
  SliderSection,
  SliderStyled,
} from './ImageSlider.styled';
import { nanoid } from 'nanoid';


const ImageSlider: FC<{ images?: string[] }> = ({ images }) => {
  const customPaging = (i: number) => (
    <MiniatureLink key={nanoid(6)}>
      <MiniatureImg
        key={nanoid(6)}
        src={`${images?.[i]}`}
        alt={`Slide ${i + 1}`}
      />
    </MiniatureLink>
  );

  const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
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
    <SliderSection>
      <SliderStyled {...settings}>
        {images?.map(image => (
          <ImageContainer key={nanoid(6)}>
            <img src={image} alt="toy photo"></img>
          </ImageContainer>
        ))}
      </SliderStyled>
    </SliderSection>
  );
};

export default ImageSlider;
