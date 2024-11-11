import React from "react";
import "./OurMission.css";
import GraduationPic from "../../../assests/GraduationPic.png";

const OurMission = () => {
  return (
    <div className="mission-section">
        <img src={GraduationPic} />
      <div className="text-container">
        <h2>Our Mission</h2>
        <p>
          Elexport Overseas is dedicated to empowering aspiring students to
          achieve their academic and personal goals through personalized
          guidance and support throughout their study abroad journey. Our
          mission is to provide comprehensive services, from initial research to
          post-arrival assistance, enabling students to unlock the doors to
          international education and pursue their passions at world-class
          universities. We aim to equip students with the knowledge, skills, and
          experiences necessary to thrive in a globalized world and achieve
          long-term success.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
