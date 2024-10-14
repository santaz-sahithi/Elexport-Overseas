import React, { useEffect } from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import SloveniaCountry from "../../components/UniversitiesContainer/SloveniaCountry/SloveniaCountry";
import SloveniaUniversities from "../../components/UniversitiesContainer/SloveniaUniversities/SloveniaUniversities"
import SloveniaImg from "../../assests/SloveniaHeroImg.jpg";
import SloveniaFlag from "../../assests/SloveniaFlagImg.png";
import uni_1 from "../../assests/UnivOfLjubljana.jpg";
import uni_2 from "../../assests/UnivOfPennsylvaniaImg.jpg";
import uni_3 from "../../assests/UnivOfPrimorska.png";
import uni_4 from "../../assests/UnivOfNovaGorica.jpg";

const SloveniamericaUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={SloveniaImg}
        rel_country_name="SLOVENIA"
        img_dec_prop=""
      />
      <SloveniaCountry rel_country_flag={SloveniaFlag} here_we_go_again="" />
      <SloveniaUniversities
        Slovenia_uni_img1={uni_1}
        Slovenia_uni1="University of Ljubljana"
        Slovenia_uni_img2={uni_2}
        Slovenia_uni2="University of Maribor"
        Slovenia_uni_img3={uni_3}
        Slovenia_uni3="University of Primorska"
        Slovenia_uni_img4={uni_4}
        Slovenia_uni4="University of Nova Gorica"
      />
      <PopCourses />
    </div>
  );
};

export default SloveniamericaUni;
