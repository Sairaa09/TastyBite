import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'
import Img4 from '../assets/img4.png'
import Img5 from '../assets/img5.png'

const ImageSlider = () => {
  const images = [
    Img1,Img2,Img3,Img4,Img5
  
  ];



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full max-w-[90vw] border-0 mx-auto mt-20 overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="max-w-[90vw] h-[60vh]">
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
