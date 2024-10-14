import React, { useEffect } from "react";
// import SwedenHome from '../../components/UniversitiesContainer/SwedenHome/SwedenHome';
import PopCourses from "../../components/UniversitiesContainer/popCourses/PopCourses";
import SwedenCountry from '../../components/UniversitiesContainer/SwedenCountry/SwedenCountry';
import SwedenUniversities from '../../components/UniversitiesContainer/SwedenUniversities/SwedenUniversities';
import SwedenImg from "../../assests/Sweden-background-img.jpeg";
import SwedenFlag from "../../assests/Sweden-flag-img.jpeg";
import Swe_uni_1 from "../../assests/Swe_uni-1.jpeg";
import Swe_uni_2 from "../../assests/Swe_uni-2.jpeg";
import Swe_uni_3 from "../../assests/Swe_uni-3.jpeg";
import Swe_uni_4 from "../../assests/Swe_uni-4.jpeg";
import Swe_uni_5 from "../../assests/Swe_uni-5.jpeg";
import Swe_uni_6 from "../../assests/Swe_uni-6.jpeg";
import Swe_uni_7 from "../../assests/Swe_uni-7.jpeg";
import Swe_uni_8 from "../../assests/Swe_uni-8.jpeg";
import Swe_uni_9 from "../../assests/Swe_uni-9.jpeg";
import CountryHome  from "../../components/UniversitiesContainer/countryHome/CountryHome";

const SwedenUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={SwedenImg}
        rel_country_name="SWEDEN"
        img_dec_prop=""
      />
      <SwedenCountry rel_country_flag={SwedenFlag} here_we_go_again="" />
      <SwedenUniversities
        Swe_uni_img1={Swe_uni_1}
        Swe_uni1="Uppsala University,Uppsala"
        Swe_uni_img2={Swe_uni_2}
        Swe_uni2="Linnaeus University,Vaxjo"
        Swe_uni_img3={Swe_uni_3}
        Swe_uni3="University of Skovde"
        Swe_uni_img4={Swe_uni_4}
        Swe_uni4="Halmstad University"
        Swe_uni_img5={Swe_uni_5}
        Swe_uni5="Jonkoping University"
        Swe_uni_img6={Swe_uni_6}
        Swe_uni6="Dalarna University"
        Swe_uni_img7={Swe_uni_7}
        Swe_uni7="Kristianstad University"
        Swe_uni_img8={Swe_uni_8}
        Swe_uni8="Lund University"
        Swe_uni_img9={Swe_uni_9}
        Swe_uni9="Swedish Uni. of Agri. Sciences"
      />
      <PopCourses />
    </div>
  );
};

export default SwedenUni;