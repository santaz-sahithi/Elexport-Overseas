import React from "react";
import "./OurServices.css";
import CareerGuidancePic from "../../../assests/CareerGuideImg.jpg";
import GermanTraining from "../../../assests/IELTSTrainingImg.jpg";
import HRServices from "../../../assests/StudyAbroadImg.jpg";
import IELTSTraining from "../../../assests/IELTSTrainingImg.jpg";
import Migration from "../../../assests/MigrationImg.jpg";
import StudyAbroad from "../../../assests/StudyAbroadImg.jpg";
import TradeConsultancyPic from "../../../assests/VisaApplicaionImg.jpg";

function OurServices() {
  const services = [
    { img: CareerGuidancePic, title: "Career Guidance" },
    { img: TradeConsultancyPic, title: "Visa Application Assistance" },
    { img: GermanTraining, title: "Language Training" },
    { img: Migration, title: "Migration" },
    { img: HRServices, title: "Flight Booking" },
    { img: StudyAbroad, title: "Study Abroad" },
    { img: IELTSTraining, title: "IELTS and Test Preperation Training" },
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