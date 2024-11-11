import React from "react";
import "./OurServices.css";
import CareerGuidancePic from "../assests/TradeConsultancyPic.png";
import GermanTraining from "../assests/TradeConsultancyPic.png";
import HRServices from "../assests/TradeConsultancyPic.png";
import IELTSTraining from "../assests/TradeConsultancyPic.png";
import Migration from "../assests/TradeConsultancyPic.png";
import StudyAbroad from "../assests/TradeConsultancyPic.png";
import TradeConsultancyPic from "../assests/TradeConsultancyPic.png";

function OurServices() {
  const services = [
    { img: CareerGuidancePic, title: "Career Guidance" },
    { img: TradeConsultancyPic, title: "Visa Application Assistance" },
    { img: GermanTraining, title: "Language Training" },
    { img: Migration, title: "Migration" },
    { img: HRServices, title: "Flight Booking/Assistance" },
    { img: StudyAbroad, title: "Study Abroad" },
    { img: IELTSTraining, title: "IELTS and Test Preperation Training" },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img
              src={service.img}
              alt={service.title}
              className="service-image"
            />
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurServices;