import React, { useEffect } from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import IrelandUniversities from "../../components/UniversitiesContainer/IrelandUniversities/IrelandUniversities"
import IrelandCountry from "../../components/UniversitiesContainer/IrelandCountry/IrelandCountry";
import IrelandImg from "../../assests/IrelandHeroImg.jpg";
import IrelandFlag from "../../assests/IrelandFlag.jpg";
import uni_1 from "../../assests/DundalkUniversity.jpg";
import uni_2 from "../../assests/DITUniversity.jpg";
import uni_3 from "../../assests/DublinBuisnessSchool.jpg";
import uni_4 from "../../assests/WaterfordUniversity.jpg";
import uni_5 from "../../assests/GriffithUniversity.jpeg";
import uni_6 from "../../assests/TallaghtUniversity.jpg";
import uni_7 from "../../assests/AtlanticTechUniversity.jpg";

const IrelandUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={IrelandImg}
        rel_country_name="IRELAND"
        img_dec_prop=""
      />  
      <IrelandCountry rel_country_flag={IrelandFlag} here_we_go_again="" />
      <IrelandUniversities
        Ireland_uni_img1={uni_1}
        Ireland_uni1="Dundalk Institute of Tech."
        Ireland_uni_img2={uni_2}
        Ireland_uni2="Tech. University Dublin"
        Ireland_uni_img3={uni_3}
        Ireland_uni3="Dublin Business School"
        Ireland_uni_img4={uni_4}
        Ireland_uni4="Waterford Institute of Tech."
        Ireland_uni_img5={uni_5}
        Ireland_uni5="Griffith College Cork"
        Ireland_uni_img6={uni_6}
        Ireland_uni6="Institute of Tech., Tallaght"
        Ireland_uni_img7={uni_7}
        Ireland_uni7="Atlantic Tech. University"
      />
      <PopCourses />
    </div>
  );
};

export default IrelandUni;
