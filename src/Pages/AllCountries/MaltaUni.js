import React, { useEffect } from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import MaltaUniversities from "../../components/UniversitiesContainer/MatlaUniversities/MaltaUniversities"
import MaltaCountry from '../../components/UniversitiesContainer/MaltaCountry/MaltaCountry'
import MaltaImg from "../../assests/MaltaHeroImg.jpg";
import MaltaFlag from "../../assests/MaltaFlagImg.jpg";
import uni_1 from "../../assests/GlobalCollegeMalta.jpg";
import uni_2 from "../../assests/UnivOfMalta.jpg";
import uni_3 from "../../assests/MidUnivOfMalta.png";

const MaltaUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={MaltaImg}
        rel_country_name="MALTA"
        img_dec_prop=""
      />
      <MaltaCountry rel_country_flag={MaltaFlag} here_we_go_again="" />
      <MaltaUniversities
        Malta_uni_img1={uni_1}
        Malta_uni1="Global College Malta"
        Malta_uni_img2={uni_2}
        Malta_uni2="University of Malta"
        Malta_uni_img3={uni_3}
        Malta_uni3="Middlesex University Malta"
        Malta_uni_img4={null}  // Or undefined, or an empty string
        Malta_uni4={null}           // Placeholder for future university
        Malta_uni_img5={null}  // Placeholder
        Malta_uni5={null}
      />
      <PopCourses />
    </div>
  );
};

export default MaltaUni;
