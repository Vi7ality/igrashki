import styles from "./ImageSlider.module.scss";
import arrowLeft from "../assets/arrowLeft.png";
import { FC, useEffect, useState } from "react";

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

  return (
    <div className={styles.slider}>
      <div className={styles.imagesColumn}>
        {images?.map((image) => (
          <div key={image} className={styles.image} onClick={() => setSelectedImage(image)}>
            <img src={image} alt="Toy" />
          </div>
        ))}
      </div>
      <div className={styles.selectedImage}>
        <div className={styles.arrowLeft} onClick={handlePrev}>
          <img src={arrowLeft} alt="Arrow" />
        </div>
        <img className={styles.selectedImagePng} src={selectedImage} alt="Toy" />
        <div className={styles.arrowRight} onClick={handleNext}>
          <img src={arrowLeft} alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
