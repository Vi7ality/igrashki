import Slider from "react-slick";
import styled from "styled-components";

export const SliderStyled = styled(Slider)`
.slick-track {
  padding-top: 30px;
  padding-bottom: 30px;
}

.slick-slide {
  padding-right: 20px;
  padding-left: 20px;
   -webkit-transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transform: scale(1, 1);
  transform: scale(1, 1);
}
.slick-slide.slick-center {
  -webkit-transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-transform: scale(1.1333, 1.1333);
  transform: scale(1.1333, 1.1333);
  padding-left: 30px;
  padding-right: 30px;
}

.gallery-img {
  width: 310px !important;
  height: 310px;
  border-radius: 60px;

@media (min-width: 980px) {
    width: 450px !important;
    height: 450px;
}
}

.slick-dots {
  bottom: -48px;

@media (min-width: 980px) {
    bottom: -66px;
}
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

`