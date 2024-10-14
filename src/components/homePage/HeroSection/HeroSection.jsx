import React from "react";
import "./HeroSection.css";
import UniversityImage from "../../../assests/UniversityImage.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
            <img src={UniversityImage} alt="sdfgh" className="HSUniImg"/>
      <div className="hero-content">
        <div className="soft-tint">
        </div>
          <h1>Crafting Your Destiny</h1>       
          <p>Steps to a fulfilling future</p>
          <div className="explore-container">
            <div className="explore-box">EXPLORE 20000+ COURSES</div>
          </div>        
      </div>
    </div>
  );
};

export default HeroSection;
