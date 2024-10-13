import React from "react";
import {
  CountryHome,
  PopCourses,
  PopUniversities,
} from "../../components/UniversitiesContainer";
import MaltaCountry from '../../components/UniversitiesContainer/MaltaCountry/MaltaCountry'
import MaltaImg from "../../assests/MaltaHeroImg.jpg";
import MaltaFlag from "../../assests/MaltaFlagImg.jpg";
import uni_1 from "../../assests/GlobalCollegeMalta.jpg";
import uni_2 from "../../assests/UnivOfMalta.jpg";
import uni_3 from "../../assests/MidUnivOfMalta.png";

const MaltaUni = () => {
  return (
    <div>
      <CountryHome
        rel_country_img={MaltaImg}
        rel_country_name="MALTA"
        img_dec_prop=""
      />
      <MaltaCountry rel_country_flag={MaltaFlag} here_we_go_again="" />
      <PopUniversities
        pop_uni_img1={uni_1}
        pop_uni1="Global College Malta"
        pop_uni_img2={uni_2}
        pop_uni2="University of Malta"
        pop_uni_img3={uni_3}
        pop_uni3="Middlesex University Malta"
        pop_uni_img4={null}  // Or undefined, or an empty string
        pop_uni4={null}           // Placeholder for future university
        pop_uni_img5={null}  // Placeholder
        pop_uni5={null}
      />
      <PopCourses />
    </div>
  );
};

export default MaltaUni;
