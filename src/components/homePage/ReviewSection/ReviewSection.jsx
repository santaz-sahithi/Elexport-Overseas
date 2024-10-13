import React from 'react'
import './ReviewSection.css'

import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import Australiaicon from "../resources/ReviewEx1.png";
import USAicon from "../resources/ReviewEx2.png";
import Germanyicon from "../resources/ReviewEx3.png";
import Canadaicon from "../resources/ReviewEx3.png";
import UKicon from "../resources/ReviewEx2.png";

const reviews = [
    { imgSrc: USAicon, name: "USA" },
    { imgSrc: Germanyicon, name: "Germany" },
    { imgSrc: UKicon, name: "United Kingdom" },
    { imgSrc: Australiaicon, name: "Australia" },
    { imgSrc: UKicon, name: "United Kingdom" },
    { imgSrc: Australiaicon, name: "Australia" },
    { imgSrc: Canadaicon, name: "Canada" },
    { imgSrc: Canadaicon, name: "Canada" },
  ];
const ReviewSection = () => {
  return (
    
  
      <>
      <h1>What People Say...</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
        
          640: {
            slidesPerView: 2,   // 2 slides per view for screens >= 640px
            spaceBetween: 20,   // Reduced space between slides for screens >= 640px
          },
          768: {
            slidesPerView: 3,   // 3 slides per view for screens >= 768px
            spaceBetween: 30,   // Space between slides for screens >= 768px
          },
          1024: {
            slidesPerView: 3,   // 4 slides per view for screens >= 1024px
            spaceBetween: 20,   // Default space between slides
          },
        }}
      
        modules={[Pagination]}
        className="mySwiper2"
      >
    
    {reviews.map((review, index) => (
               <SwiperSlide className='swiper-slide-2'>
                <div className='review_box '>
                  <div className='review_rating'><FaStar/><FaStar/><FaStar/></div>
                  <div className='review_text'><p>Excellent consultancy services with a deep understanding of industry trends. 
                    Communication was clear and professional throughout the entire process.”</p></div>
                  <div className='review_img'><img src={review.imgSrc} alt={review.name} /> </div>
                  <div><h3 className="review_name">{review.name}</h3></div>
                </div>
              
             
                  </SwiperSlide>
                ))}
         
      </Swiper>
    </>
   
  );
}

export default ReviewSection
