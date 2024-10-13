import React from "react";
import {
  CountryHome,
  AboutCountry,
  PopCourses,
  PopUniversities,
} from "../../components/UniversitiesContainer";
import USAImg from "../../assests/USAHeroImg.jpg";
import USAFlag from "../../assests/USAFlagImg.jpg";
import uni_1 from "../../assests/HarvardUnivImg.jpg";
import uni_2 from "../../assests/YaleUnivImg.jpg";
import uni_3 from "../../assests/PrincetonUnivImg.jpg";
import uni_4 from "../../assests/ColumbiaUnivImg.jpg";
import uni_5 from "../../assests/BrownUnivImg.jpg";
import uni_6 from "../../assests/CornelUnivImg.jpg";
import uni_7 from "../../assests/UnivOfPennsylvaniaImg.jpg";

const USAmericaUni = () => {
  return (
    <div>
      <CountryHome
        rel_country_img={USAImg}
        rel_country_name="USA"
        img_dec_prop=""
      />
      <AboutCountry rel_country_flag={USAFlag} here_we_go_again="" />
      <PopUniversities
        pop_uni_img1={uni_1}
        pop_uni1="Harvard University"
        pop_uni_img2={uni_2}
        pop_uni2="Yale University"
        pop_uni_img3={uni_3}
        pop_uni3="Princeton University"
        pop_uni_img4={uni_4}
        pop_uni4="Columbia University"
        pop_uni_img5={uni_5}
        pop_uni5="Brown University"
        pop_uni_img6={uni_6}
        pop_uni6="Cornell University"
        pop_uni_img7={uni_7}
        pop_uni7="University of Pennsylvania"
      />
      <PopCourses />
    </div>
  );
};

export default USAmericaUni;
