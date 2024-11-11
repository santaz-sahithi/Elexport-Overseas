import React, { useRef } from 'react'
import './ReviewSection.css'

import review1 from '../../../assests/ReviewEx1.jpg'
import review2 from '../../../assests/ReviewEx2.jpg'
import review3 from '../../../assests/ReviewEx3.jpg'
import review4 from '../../../assests/ReviewEx4.jpg'
import review5 from '../../../assests/ReviewEx5.jpg'
import MyReviewCard from './MyReviewCard'



const ReviewSection = () => {
  const boxRef = useRef(null); // Create a ref to the product-container

  const btnpressprev = () => {
    let cardWidth = boxRef.current.querySelector(".r-my-card").clientWidth; // Get width of a single card
    boxRef.current.scrollLeft -= cardWidth; // Move by two cards' width
  };
  
  const btnpressnext = () => {
    let cardWidth = boxRef.current.querySelector(".r-my-card").clientWidth;
    boxRef.current.scrollLeft += cardWidth; 
  };
  return (
   
  <div className="review-carousel">
  <button className="pre-btn" onClick={btnpressprev}>
    <p>&lt;</p>
  </button>
  <button className="next-btn" onClick={btnpressnext}>
    <p>&gt;</p>
  </button>

  <div className="review-heading">
    <h1>What Our Guests Say...</h1>
  </div>
  <div className="review-container" ref={boxRef}>
    <MyReviewCard className="my-card" stars={5} imgSrc={review1} name="Anna" desc="Excellent consultancy services with a deep understanding of industry trends.Communication was clear and professional throughout the entire process."/>
    <MyReviewCard className="my-card" stars={5} imgSrc={review2} name="Hema" desc="Exceptional guidance throughout the entire process! Their expertise made my overseas education journey seamless." />
    <MyReviewCard className="my-card" stars={4} imgSrc={review3} name="Rithika" desc="The team was incredibly supportive, offering personalized advice tailored to my study goals abroad."/>
    <MyReviewCard className="my-card" stars={5} imgSrc={review4} name="John" desc="Professional and reliable, they provided clear insights and guidance on every step toward international education." />
    <MyReviewCard className="my-card" stars={4} imgSrc={review5} name="Kale" desc="Highly recommend! They simplified complex procedures, helping me secure admission to my dream university."/>
  </div>
</div>
  )
};

export default ReviewSection;
      