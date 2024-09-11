import {
  Image,
  ImageItem,
  ImageUl,
  RemoveImgBtn,
  XIcon,
} from './ImagesList.styled';

interface ImagesListProp {
  images: string[];
  setImagesToDelete(arg: string[]): void;
  setImages(arg: string[]): void;
  imagesToDelete: string[];
}

const ImagesList = ({
  images,
  setImagesToDelete,
  setImages,
  imagesToDelete,
}: ImagesListProp) => {
  return (
    <ImageUl>
      {images.map((image, index) => (
        <ImageItem key={index}>
          <Image src={image} alt="" />
          <RemoveImgBtn
            type="button"
            onClick={() => {
              setImagesToDelete([...imagesToDelete, image]);
              setImages(images.filter((_, i) => i !== index));
            }}
          >
            <XIcon>x</XIcon>
          </RemoveImgBtn>
        </ImageItem>
      ))}
    </ImageUl>
  );
};

export default ImagesList;
