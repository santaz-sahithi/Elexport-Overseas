import React from "react";
import Aboutus from "../../../assests/AboutUsPic.png";
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="AboutUs_container" id = "AboutUsSection">
            <div className="AboutUs_heading"><h2>AboutUs</h2></div>
            <div className="AboutUs_content">

                {/* left Side - Text Content */}
                <div className="AboutUs_text">
                    <p className="AboutUs_description">
                    At Elexport Overseas, based in Cochin, we are more than a study abroad consultancy – we are your trusted partner in achieving your international education dreams. Our mission is to empower students by providing personalized guidance and support throughout the study abroad journey. With years of expertise, we offer tailored services, including university selection, application assistance, visa guidance, and pre-departure support. Our knowledgeable team stays updated on the latest immigration and education trends to ensure a seamless experience. Choose Elexport Overseas to unlock the doors to global opportunities and academic success.
                    </p>
                </div>
                {/* Right Side - Image */}
                <div className="AboutUs_image">
                    <img src={Aboutus} alt="Man thinking with laptop" className="image" />
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
