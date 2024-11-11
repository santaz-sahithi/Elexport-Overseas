import React from "react";
import "./OurServices.css";
import ScholarshipAssistance from "../../../assests/S_ScholarshipAssistance.jpg";
import UniApp from "../../../assests/S_UniversityApplication.jpg";
import PreDep from "../../../assests/V_PreDeparture.jpg";
import AccoAssis from "../../../assests/V_topUni.jpeg";
import CourseAdvice from "../../../assests/S_CourseAdvice.jpg";
import PartTime from "../../../assests/Part-time-job.jpg";
import VisaAppPic from "../../../assests/S_VisaApplication.jpg";

function OurServices() {
  const services = [
    { img: ScholarshipAssistance, title: "Personalized guidance for student programs" },
    { img: AccoAssis, title: "Admission to top universities" },
    { img: UniApp, title: "Appealing study grants or scholarships" },
    { img: VisaAppPic, title: " Visa and Flight ticket assistance" },
    { img: CourseAdvice, title: "Funding Assistance" },
    { img: PreDep, title: "Airport pickup and Accomodation Assistance" },
    { img: PartTime, title: "Part time & Full time Job Assistance" },
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