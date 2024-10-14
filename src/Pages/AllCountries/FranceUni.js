import React, { useEffect } from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import FranceCountry from "../../components/UniversitiesContainer/FranceCountry/FranceCountry";
import FranceUniversities from "../../components/UniversitiesContainer/FranceUniversities/FranceUniversities";
import FranceImg from "../../assests/FranceHeroImg.jpg";
import FranceFlag from "../../assests/FranceFlagImg.jpg";
import uni_1 from "../../assests/QueenMaryUniv.jpg";
import uni_2 from "../../assests/SkemaBuisnessUniv.jpg";
import uni_3 from "../../assests/RennesSchoolImg.jpg";
import uni_4 from "../../assests/NEOMAUnivImg.jpg";
import uni_5 from "../../assests/ISEPUnivImg.jpg";
import uni_6 from "../../assests/BurgundyUniv.jpg";
import uni_7 from "../../assests/ESSCAUniv.jpg";
import uni_8 from "../../assests/ISCUnivImg.jpg";
import uni_9 from "../../assests/IMTMilnesUniv.png";

const FranceUni = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome
        rel_country_img={FranceImg}
        rel_country_name="FRANCE"
        img_dec_prop=""
      />
      <FranceCountry rel_country_flag={FranceFlag} here_we_go_again="" />
      <FranceUniversities
        France_uni_img1={uni_1}
        France_uni1="Queen Mary University"
        France_uni_img2={uni_2}
        France_uni2="Skema Business School"
        France_uni_img3={uni_3}
        France_uni3="Rennes School of Business"
        France_uni_img4={uni_4}
        France_uni4="NEOMA Business School"
        France_uni_img5={uni_5}
        France_uni5="ISEP University Paris"
        France_uni_img6={uni_6}
        France_uni6="Burgundy School of Business "
        France_uni_img7={uni_7}
        France_uni7="ESSCA University"
        France_uni_img8={uni_8}
        France_uni8="ISC University Paris"
        France_uni_img9={uni_9}
        France_uni9="IMT Mines, Alès"
      />
      <PopCourses/>
    </div>
  );
};

export default FranceUni;
