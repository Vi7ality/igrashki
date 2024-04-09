import { FC } from 'react';
import { ImageConatiner, MiniatureLink, SliderStyled } from './ImageSlider.styled';

const ImageSlider: FC<{ images?: string[] }> = ({ images }) => {
  const customPaging = (i: number) => (
    <MiniatureLink>
      <img src={`${images?.[i]}`} alt={`Slide ${i + 1}`} />
    </MiniatureLink>
  );

  const settings = {
    customPaging,
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          dots: true,
          dotsClass: 'slick-dots slick-thumb',
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SliderStyled {...settings}>
      {images?.map(image => (
        <ImageConatiner>
          <img src={image}></img>
        </ImageConatiner>
      ))}
    </SliderStyled>
  );
};

export default ImageSlider;

// <div className={styles.slider}>
//   <div className={styles.imagesColumn}>
//     {images?.map((image) => (
//       <div key={image} className={styles.image} onClick={() => setSelectedImage(image)}>
//         <img src={image} alt="Toy" />
//       </div>
//     ))}
//   </div>
//   <div className={styles.selectedImage}>
//     <div className={styles.arrowLeft} onClick={handlePrev}>
//       <img src={arrowLeft} alt="Arrow" />
//     </div>
//     <img className={styles.selectedImagePng} src={selectedImage} alt="Toy" />
//     <div className={styles.arrowRight} onClick={handleNext}>
//       <img src={arrowLeft} alt="Arrow" />
//     </div>
//   </div>
// </div>
