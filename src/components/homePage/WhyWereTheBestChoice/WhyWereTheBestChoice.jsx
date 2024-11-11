import React from "react";
import "./WhyWereTheBestChoice.css"; // Make sure this CSS file is created
import ThinkMan from "../../../assests/ThinkMan.png";

const WhyWereTheBestChoice = () => {
  return (
    <div className="full">
      <div className="title-why-we-best"><h2 className="best-choice-heading">Why We're the Best Choice</h2></div>
      <div className="best-choice-container">

        {/* Left Side - Image */}
        <div className="best-choice-image">
          <img src={ThinkMan} alt="Man thinking with laptop" className="image" />
        </div>

        {/* Right Side - Text Content */}
        <div className="best-choice-content">
          <p className="best-choice-description">
            Elexport Overseas offers a range of benefits for students aspiring to study abroad:</p>
          <ul className="best-choice-list">
            <li>
                &bull; &nbsp; Personalized Guidance: Tailored support throughout the process.
            </li>
            <li>
                &bull; &nbsp; Comprehensive Services: University selection, application help, visa guidance, and pre-departure orientation.            </li>
            <li>
                &bull; &nbsp; Global Expertise: In-depth knowledge of various destinations and universities.
            </li>
            <li>
                &bull; &nbsp; Commitment to Success: Dedicated to helping students achieve their goals.
            </li>
            <li>
                &bull; &nbsp; Strong Network: Extensive partnerships for diverse opportunities.
            </li>
            <li>
                &bull; &nbsp; Trustworthy Reputation: Proven track record in guiding students effectively.
            </li>
          </ul>
          <p className="best-choice-footer">
            With Elexport Overseas, you’re in experienced hands every step of the way.</p>
        </div>

      </div>
    </div>
  );
};

export default WhyWereTheBestChoice;
