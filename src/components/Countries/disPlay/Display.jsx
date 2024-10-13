import React from 'react'
import './display.css'
import image1 from "../../../assests/image1.png"

function Display() {
  return (
    <div>
      <img className='img_1' src={image1} alt="No display"></img>
      <div className='title'>
        COUNTRIES
      </div>
    </div>
  )
}

export default Display
