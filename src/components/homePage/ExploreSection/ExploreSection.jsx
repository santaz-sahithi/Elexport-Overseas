import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ExploreSection.css";

import Australiaicon from "../../../assests/Australia.jpg";
import USAicon from "../../../assests/usa.jpg";
import Germanyicon from "../../../assests/Germany.jpg";
import Canadaicon from "../../../assests/Canada.jpg";
import UKicon from "../../../assests/uk.jpg";
import Latviaicon from "../../../assests/LatviaExplore.jpg";
import Lithuaniaicon from "../../../assests/LithuaniaExplore.jpg";
import Franceicon from "../../../assests/FranceExplore.jpg";
import Swedenicon from "../../../assests/SwedenExplore.jpg";
import Finlandicon from "../../../assests/FinlandExplore.jpg";
import Irelandicon from "../../../assests/IrelandExplore.jpg";
import Maltaicon from "../../../assests/MaltaExplore.jpg";
// import Sloveniaicon from "../../../assests/"

import { Keyboard, Pagination, Navigation } from "swiper/modules";


const ExploreSection = () => {
  const cards = [
    { imgSrc: USAicon, name: "USA" },
    { imgSrc: Germanyicon, name: "Germany" },
    { imgSrc: UKicon, name: "United Kingdom" },
    { imgSrc: Australiaicon, name: "Australia" },
    { imgSrc: Canadaicon, name: "Canada" },
    { imgSrc: Latviaicon, name: "Latvia" },
    { imgSrc: Lithuaniaicon, name: "Lithuania" },
    { imgSrc: Swedenicon, name: "Sweden" },
    { imgSrc: Franceicon, name: "France" },
    { imgSrc: Finlandicon, name: "Finland" },
    { imgSrc: Irelandicon, name: "Ireland" },
    { imgSrc: Maltaicon, name: "Malta" },
    // { imgSrc: Sloveniaicon, name: "Slovenia" },
    // { imgSrc: Austriaicon, name: "Austria" },
    // { imgSrc: Hungaryicon, name: "Hungary" },
  ];

  return (
    <>
    <div className="explore-heading">
      <h1>Explore the Best of the World</h1>
    </div>
      <Swiper
      
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1000:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        loop={true} // Disable infinite looping
        resistance={true} // Enable resistance at the last slide
        resistanceRatio={0.85} // Disables movement after the last slide is reached
        className="mySwiper1"
      >
        {cards.map((card, index) => (
          <SwiperSlide className="swiper-slide-1" key={index}>
            <a href="">
              <img src={card.imgSrc} alt={card.name} />
              <h3 className="card1">{card.name}</h3>
            </a>
          </SwiperSlide>

          
        ))}
      </Swiper>
    </>
  );
};

export default ExploreSection;
