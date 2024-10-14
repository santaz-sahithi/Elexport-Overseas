import React, { useEffect } from "react";
import {
  CountryHome,
  PopCourses,
  HungaryCountry,
  HungaryUniversities,
} from "../../components/UniversitiesContainer";
import HungaryImg from "../../assests/Hungary-background-img.jpeg";
import HungaryFlag from "../../assests/Hungary-flag-img.jpeg";
import Hun_uni_1 from "../../assests/Hun_uni-1.jpeg";
import Hun_uni_2 from "../../assests/Hun_uni-2.jpeg";
import Hun_uni_3 from "../../assests/Hun_uni-3.jpeg";
import Hun_uni_4 from "../../assests/Hun_uni-4.jpeg";
import Hun_uni_5 from "../../assests/Hun_uni-5.jpeg";
import Hun_uni_6 from "../../assests/Hun_uni-6.jpeg";

const HungaryUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={HungaryImg}
        rel_country_name="HUNGARY"
        img_dec_prop=""
      />
      <HungaryCountry rel_country_flag={HungaryFlag} here_we_go_again="" />
      <HungaryUniversities
        Hun_uni_img1={Hun_uni_1}
        Hun_uni1="ötvös Loránd University "
        Hun_uni_img2={Hun_uni_2}
        Hun_uni2="Budapest University"
        Hun_uni_img3={Hun_uni_3}
        Hun_uni3="Semmelweis University"
        Hun_uni_img4={Hun_uni_4}
        Hun_uni4="Corvinus Uni. of Budapest"
        Hun_uni_img5={Hun_uni_5}
        Hun_uni5="Central European University"
        Hun_uni_img6={Hun_uni_6}
        Hun_uni6="Pázmány Péter Catholic Uni."
      />
      <PopCourses />
    </div>
  );
};

export default HungaryUni;