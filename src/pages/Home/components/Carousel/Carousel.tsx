import Slider from "react-slick";
import image2 from '../../assets/gallery/growithyou-gallery-img-02.jpg'
import image3 from '../../assets/gallery/growithyou-gallery-img-03.jpg'
import image4 from '../../assets/gallery/growithyou-gallery-img-04.jpg'
import image5 from '../../assets/gallery/growithyou-gallery-img-05.jpg'
import image6 from '../../assets/gallery/growithyou-gallery-img-06.jpg'
import image7 from '../../assets/gallery/growithyou-gallery-img-07.jpg'
import image8 from '../../assets/gallery/growithyou-gallery-img-08.jpg'
import './carousel.css'



const Carousel = () => {
  const settings = {
    className: "center",
    Transform: false,
    dots: true,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    swipeToSlide: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 10000,

  };
  return (
    <Slider {...settings}>
        <img src={image2} className='gallery-img' alt="" />
        <img src={image3} className='gallery-img' alt="" />
        <img src={image4} className='gallery-img' alt="" />
        <img src={image5} className='gallery-img' alt="" />
        <img src={image6} className='gallery-img' alt="" />
        <img src={image7} className='gallery-img' alt="" />
        <img src={image8} className='gallery-img' alt="" />
      </Slider>
  );
}

export default Carousel;
