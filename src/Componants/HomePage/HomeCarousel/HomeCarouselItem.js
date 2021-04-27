import React, { Component}from 'react';

import Slider from "react-slick";
import './homeCarouselItem.css';
import carsl1 from '../../../images/carousel-1.png'
import carsl2 from '../../../images/carousel-2.png'
import carsl3 from '../../../images/carousel-3.png'
const HomeCarouselItem = () => {

  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      arrows:false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  const dta=[
    {
      img:carsl1
    },
    {
      img:carsl2
    },
    {
      img:carsl3
    },
    {
      img:carsl1
    },
    {
      img:carsl2
    },
    {
      img:carsl3
    },
  ]
  return (
    <div className='carousel'>
          <h1 className='carousel-text'>Here are some of Our <span> Works </span> </h1>
        <div className='d-flex justify-content-center '>
       
            <div className='carouselInside mt-5 mb-5 p-5'>
             
             <Slider {...settings}>
        
            {
            dta.map(item=>
              <img  style={{display:'flex'}} src={item.img} alt=""/>
            )
            }
          
        </Slider>
            </div>
         
        </div>
    </div>
  );
};

export default HomeCarouselItem;