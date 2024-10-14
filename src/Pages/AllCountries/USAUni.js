import React, { useEffect } from "react";
import {
  CountryHome,
  PopCourses,
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
import USAmericaCountry from "../../components/UniversitiesContainer/USACountry/USAmericaCountry";
import USAmericaUniversities from "../../components/UniversitiesContainer/USAUniversities/USAmericaUniversities";

const USAUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={USAImg}
        rel_country_name="USA"
        img_dec_prop=""
      />
      <USAmericaCountry rel_country_flag={USAFlag} here_we_go_again="" />
      <USAmericaUniversities
        USA_uni_img1={uni_1}
        USA_uni1="Harvard University"
        USA_uni_img2={uni_2}
        USA_uni2="Yale University"
        USA_uni_img3={uni_3}
        USA_uni3="Princeton University"
        USA_uni_img4={uni_4}
        USA_uni4="Columbia University"
        USA_uni_img5={uni_5}
        USA_uni5="Brown University"
        USA_uni_img6={uni_6}
        USA_uni6="Cornell University"
        USA_uni_img7={uni_7}
        USA_uni7="University of Pennsylvania"
      />
      <PopCourses />
    </div>
  );
};

export default USAUni;
