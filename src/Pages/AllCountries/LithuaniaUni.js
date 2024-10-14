import React from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import LithuaniaCountry from '../../components/UniversitiesContainer/LithuaniaCountry/LithuaniaCountry';
import LithuaniaUniversities from '../../components/UniversitiesContainer/LithuaniaUniversities/LithuaniaUniversities';
import LithuaniaImg from "../../assests/LithuaniaHeroImg.jpg";
import LithuaniaFlag from "../../assests/LithuaniaFlagImg.png";
import uni_1 from "../../assests/VilniusUnivImg.jpg";
import uni_2 from "../../assests/KazimierasUniv.png";
import uni_3 from "../../assests/KaunasUnivOfTech.jpg";
import uni_4 from "../../assests/VytautasUniv.jpg";
import uni_5 from "../../assests/LithuanianSportsUniv.jpeg";


const LithuaniaUni = () => {
  return (
    <div>
      <CountryHome
        rel_country_img={LithuaniaImg}
        rel_country_name="LITHUANIA"
        img_dec_prop=""
      />
      <LithuaniaCountry rel_country_flag={LithuaniaFlag} here_we_go_again="" />
      <LithuaniaUniversities
        Lithuania_uni_img1={uni_1}
        Lithuania_uni1="Vilnius University"
        Lithuania_uni_img2={uni_2}
        Lithuania_uni2="Kazimieras University"
        Lithuania_uni_img3={uni_3}
        Lithuania_uni3="Kaunas University Of Tech."
        Lithuania_uni_img4={uni_4}
        Lithuania_uni4="Vytautas Magnus University"
        Lithuania_uni_img5={uni_5}
        Lithuania_uni5="Lithuanian sports university"
      />
      <PopCourses />
    </div>
  );
};

export default LithuaniaUni;
