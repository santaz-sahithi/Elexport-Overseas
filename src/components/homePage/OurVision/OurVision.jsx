import React from "react";
import "./OurVision.css"; // Make sure this CSS file is created
import ThinkMan from "../../../assests/OurVision.jpg";

const OurVision = () => {
  return (
    <div className="our-vision-full">
      <div className="title-our-vision">
        <h2 className="our-vision-heading">Our Vision</h2>
      </div>
      <div className="our-vision-container">
        {/* Left Side - Image */}
        <div className="our-vision-image">
          <img
            src={ThinkMan}
            alt="Man thinking with laptop"
            className="image"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="our-vision-content">
          <p className="our-vision-description">
            At Elexport, we're passionate about helping students like you
            achieve your dreams abroad. As your trusted study abroad
            consultancy, we're dedicated to providing personalized guidance and
            exceptional support every step of the way. With years of experience
            and in-depth knowledge of various study destinations and
            universities, we ensure a seamless experience by staying updated on
            the latest immigration policies and visa requirements. Studying
            abroad offers opportunities to immerse yourself in new cultures,
            gain a competitive edge in the global job market, and build lasting
            friendships. Let us empower you to achieve academic excellence,
            broaden your horizons, and become a global citizen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
