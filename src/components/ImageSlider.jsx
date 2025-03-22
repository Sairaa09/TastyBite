import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "https://images.wallpaperscraft.com/image/single/pasta_egg_noodles_103644_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/burger_cutlet_meat_123102_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/meat_baking_vegetables_88477_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/french_toast_toast_chocolate_876434_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/pizza_pastry_appetizing_104513_1280x720.jpg",
  
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
