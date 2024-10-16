import React from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import UKImg from "../../assests/UKHeroImg.jpg";
import UKFlag from "../../assests/UKFlagImg.jpg";
import uni_1 from "../../assests/BuchinghamshireUniv.jpg";
import uni_2 from "../../assests/CoventryUniv.jpg";
import uni_3 from "../../assests/RoehamptonUniv.jpeg";
import uni_4 from "../../assests/RavensbourneUniv.avif";
import uni_5 from "../../assests/DEMontfortUniv.jpg";
import uni_6 from "../../assests/ManchMetroUniv.jpg";
import uni_7 from "../../assests/UniversityOfEastLondon.webp";
import uni_8 from "../../assests/UnivOfPortsMouth.jpeg";
import uni_9 from "../../assests/LiverpoolUniv.jpg";
import UKUniversities from "../../components/UniversitiesContainer/UKUniversities/UKUniversities";
import UKCountry from "../../components/UniversitiesContainer/UKCountry/UKCountry";

const UKUni = () => {
  return (
    <div>
      <CountryHome
        rel_country_img={UKImg}
        rel_country_name="BRITAIN"
        img_dec_prop=""
      />
      <UKCountry rel_country_flag={UKFlag} here_we_go_again="" />
      <UKUniversities
        UK_uni_img1={uni_1}
        UK_uni1="Buchinghamshire new university"
        UK_uni_img2={uni_2}
        UK_uni2="Coventry university"
        UK_uni_img3={uni_3}
        UK_uni3="Roehampton university"
        UK_uni_img4={uni_4}
        UK_uni4="Ravensbourne university"
        UK_uni_img5={uni_5}
        UK_uni5="DE Montfort university"
        UK_uni_img6={uni_6}
        UK_uni6="Manchester Metropolitan university"
        UK_uni_img7={uni_7}
        UK_uni7="University of East London"
        UK_uni_img8={uni_8}
        UK_uni8="University of Portsmouth"
        UK_uni_img9={uni_9}
        UK_uni9="Liverpool university"
      />
      <PopCourses/>
    </div>
  );
};

export default UKUni;
