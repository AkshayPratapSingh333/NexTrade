import React from 'react';
import Slider from 'react-slick';

// Import your images from the assets folder
import smartphone from '../../assets/images/smartphone.jpeg';
import clothes from '../../assets/images/clothes.jpeg';
import laptops from '../../assets/images/laptops.jpeg';
import newYearOffer from '../../assets/images/newYearOffer.jpeg'; 
import HeroNewYear from '../../assets/images/HeroNewYear.jpg';  // Corrected import with extension

// Import required slick styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  // Slider settings
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <div className="slick-next">Next</div>, // Custom right arrow
    prevArrow: <div className="slick-prev">Prev</div>, // Custom left arrow
  };

  return (
    <div className="hero-section relative w-full max-h-[100rem] bg-gray-100 dark:bg-black overflow-hidden">
      {/* Image Slider */}
      <div className="slider-container relative w-full max-h-[500px]">
        <Slider {...settings}>
          <div>
            <img src={smartphone} alt="Smartphone Collection" className="w-[1400px] h-[520px] object-cover transform scale-70 rounded-md shadow-lg" />
          </div>
          <div>
            <img src={newYearOffer} alt="New Year Special Offer" className="w-[1400px] h-[520px] object-cover transform scale-70 rounded-md shadow-lg" />
          </div>
          <div>
            <img src={clothes} alt="Clothing Collection" className="w-[1400px] h-[520px] object-cover transform scale-70 rounded-md shadow-lg" />
          </div>
          <div>
            <img src={laptops} alt="Laptops Collection" className="w-[1400px] h-[520px]  object-cover transform scale-70 rounded-md shadow-lg" />
          </div>
        </Slider>
      </div>

      {/* Discount Offer (Single Landscape Image) */}
      <div className="offer-image-container mt-7 mb-0 mx-auto flex justify-center items-center dark:bg-black bg-white shadow-lg rounded-lg ">
    <img 
        src={HeroNewYear} 
        alt="New Year and Christmas Offer" 
        className="w-[1200px] h-[1010px] object-cover rounded-md shadow-lg" 
    />
</div>



    </div>
  );
};

export default HeroSection;
