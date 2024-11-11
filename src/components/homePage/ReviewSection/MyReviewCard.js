import React from 'react'
import './MyReviewCard.css'
import { FaStar } from 'react-icons/fa'
const MyReviewCard = (props) => {
  return (
   
<div className='r-my-card'>
<div className='r-my-card-rating'>{Array(props.stars).fill().map((_, index) => (
      <FaStar key={index} className='r-my-card-star'/>
    ))}</div>
<div className='r-my-card-text'><p>{props.desc}</p></div>
<div className='r-my-card-image'><img src={props.imgSrc} alt={props.name}/> </div>
<div className="r-my-card-name">{props.name}</div>
</div>
  )
}

export default MyReviewCard
