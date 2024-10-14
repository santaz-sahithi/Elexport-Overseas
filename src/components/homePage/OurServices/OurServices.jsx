import React from "react";
import "./OurServices.css";
import ScholarshipAssistance from "../../../assests/S_ScholarshipAssistance.jpg";
import UniApp from "../../../assests/S_UniversityApplication.jpg";
import PreDep from "../../../assests/V_PreDeparture.jpg";
import AccoAssis from "../../../assests/V_Accomodation.jpg";
import CourseAdvice from "../../../assests/S_CourseAdvice.jpg";
import StudyAbroad from "../../../assests/StudyAbroadImg.jpg";
import VisaAppPic from "../../../assests/S_VisaApplication.jpg";

function OurServices() {
  const services = [
    { img: ScholarshipAssistance, title: "Scholarship Assistance" },
    { img: VisaAppPic, title: "Visa Application Assistance" },
    { img: UniApp, title: "University Application" },
    { img: CourseAdvice, title: "Course Advice" },
    { img: StudyAbroad, title: "Study Abroad" },
    { img: PreDep, title: "Pre Departure Assistance" },
    { img: AccoAssis, title: "Accomodation Assistance" },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>

            <button className="services-button spin circle">
              <img
              src={service.img}
              alt={service.title}
              className="service-image"
            />
            </button>
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;