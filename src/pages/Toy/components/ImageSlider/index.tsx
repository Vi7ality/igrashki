import styles from "./ImageSlider.module.scss";
import arrowLeft from "../assets/arrowLeft.png";
import { FC, useEffect, useState } from "react";
import Slider from "react-slick";
import { ImageConatiner, SliderStyled } from "./ImageSlider.styled";

const ImageSlider: FC<{ images?: string[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string>("")

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleNext = () => {
    if (images) {
      const index = images.indexOf(selectedImage);
      if (index < images.length - 1) {
        setSelectedImage(images[index + 1]);
      } else {
        setSelectedImage(images[0]);
      }
    }
  };

  const handlePrev = () => {
    if (images) {
      const index = images.indexOf(selectedImage);
      if (index > 0) {
        setSelectedImage(images[index - 1]);
      } else {
        setSelectedImage(images[images.length - 1]);
      }
    }
  };

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  slidesToScroll: 1,
  width: "100%",
  };

  return (
    <SliderStyled {...settings}>
      {images?.map(image => { console.log(image); return <ImageConatiner><img src={image}></img></ImageConatiner>; })}
    </SliderStyled>
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
  );
};

export default ImageSlider;
