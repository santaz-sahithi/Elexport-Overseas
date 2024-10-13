import React from "react";
import {
  CountryHome,
  PopCourses,
  PopUniversities,
} from "../../components/UniversitiesContainer";
import AustraliaCountry from '../../components/UniversitiesContainer/AustraliaCountry/AustraliaCountry';
import AustraliaImg from "../../assests/AustraliaHeroImg.jpg";
import AustraliaFlag from "../../assests/AustralianFlagImg.jpg";
import uni_1 from "../../assests/UnivOfMelbourne.jpg";
import uni_2 from "../../assests/UnivOfSydney.avif";
import uni_3 from "../../assests/UnivOfQueensLand.jpg";
import uni_4 from "../../assests/ANUniv.jpg";
import uni_5 from "../../assests/UnivOfWestAustralia.jpeg";
import uni_6 from "../../assests/UnivOfAdelade.jpg";
import uni_7 from "../../assests/UnivOfNewSouthWales.jpg";
import uni_8 from "../../assests/MonashUniv.jpeg";

const AustraliaUni = () => {
  return (
    <div>
      <CountryHome
        rel_country_img={AustraliaImg}
        rel_country_name="AUSTRALIA"
        img_dec_prop=""
      />
      <AustraliaCountry rel_country_flag={AustraliaFlag} here_we_go_again="" />
      <PopUniversities
        pop_uni_img1={uni_1}
        pop_uni1="University of Melbourne"
        pop_uni_img2={uni_2}
        pop_uni2="University of Sydney"
        pop_uni_img3={uni_3}
        pop_uni3="University of Queensland"
        pop_uni_img4={uni_4}
        pop_uni4="Australian National University"
        pop_uni_img5={uni_5}
        pop_uni5="University of Western Australia"
        pop_uni_img6={uni_6}
        pop_uni6="University of Adelaide"
        pop_uni_img7={uni_7}
        pop_uni7="University of New South Wales"
        pop_uni_img8={uni_8}
        pop_uni8="Monash University"
      />
      <PopCourses />
    </div>
  );
};

export default AustraliaUni;
