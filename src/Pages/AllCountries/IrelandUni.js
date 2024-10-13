import React from "react";
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
  return (
    <div>
      <CountryHome
        rel_country_img={IrelandImg}
        rel_country_name="IRELAND"
        img_dec_prop=""
      />  
      <IrelandCountry rel_country_flag={IrelandFlag} here_we_go_again="" />
      <IrelandUniversities
        pop_uni_img1={uni_1}
        pop_uni1="Dundalk Institute of Tech."
        pop_uni_img2={uni_2}
        pop_uni2="Tech. University Dublin"
        pop_uni_img3={uni_3}
        pop_uni3="Dublin Business School"
        pop_uni_img4={uni_4}
        pop_uni4="Waterford Institute of Tech."
        pop_uni_img5={uni_5}
        pop_uni5="Griffith College Cork"
        pop_uni_img6={uni_6}
        pop_uni6="Institute of Tech., Tallaght"
        pop_uni_img7={uni_7}
        pop_uni7="Atlantic Tech. University"
      />
      <PopCourses />
    </div>
  );
};

export default IrelandUni;
