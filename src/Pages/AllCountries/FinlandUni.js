import React, { useEffect } from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import FinlandCountry from "../../components/UniversitiesContainer/FinlandCountry/FinlandCountry.jsx";
import FinlandUniversities from "../../components/UniversitiesContainer/FinlandUniversities/FinlandUniversities.jsx";
import FinlandImg from "../../assests/Finland_Hero.jpg";
import FinlandFlagImg from "../../assests/FinlandFlagImg.jpg";
import Fin_uni_1 from "../../assests/Fin_uni-1.jpeg";
import Fin_uni_2 from "../../assests/Fin_uni-2.jpeg";
import Fin_uni_3 from "../../assests/Fin_uni-3.jpeg";
import Fin_uni_4 from "../../assests/Fin_uni-4.jpeg";
import Fin_uni_5 from "../../assests/Fin_uni-5.jpeg";
import Fin_uni_6 from "../../assests/Fin_uni-6.jpeg";
import Fin_uni_7 from "../../assests/Fin_uni-7.jpeg";

const FinlandUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={FinlandImg}
        rel_country_name="FINLAND"
        img_dec_prop="asdfgh"
      />
      <FinlandCountry rel_country_flag={FinlandFlagImg} here_we_go_again="" />
      <FinlandUniversities
        Fin_uni_img1={Fin_uni_1}
        Fin_uni1="Aalto University"
        Fin_uni_img2={Fin_uni_2}
        Fin_uni2="Uni. of Eastern Finland"
        Fin_uni_img3={Fin_uni_3}
        Fin_uni3="LUT Uni. Lappeenranta"
        Fin_uni_img4={Fin_uni_4}
        Fin_uni4="SAMK University"
        Fin_uni_img5={Fin_uni_5}
        Fin_uni5="HAMK University"
        Fin_uni_img6={Fin_uni_6}
        Fin_uni6="Haaga-Helia Uni. of Applied Sciences"
        Fin_uni_img7={Fin_uni_7}
        Fin_uni7="LAB Uni. of Applied Sciences"
      />
      <PopCourses />
    </div>
  );
};

export default FinlandUni;
