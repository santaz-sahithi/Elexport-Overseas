import React from "react";
import "./HeroSection.css";
import whatsappIcon from "../../../assests/whatsapp-icon.png";
import callIcon from "../../../assests/Call button.png";
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

      <div className="social-icons">
        <a href="https://wa.link/10di5m">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="tel:7593969629">
          <img src={callIcon} alt="Caller" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
