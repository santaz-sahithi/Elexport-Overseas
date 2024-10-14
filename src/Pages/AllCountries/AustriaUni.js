import React, {useEffect} from "react";
import {
  CountryHome,
  PopCourses,
} from "../../components/UniversitiesContainer";
import AustriaCountry from '../../components/UniversitiesContainer/AustriaCountry/AustriaCountry';
import AustriaUniversities from '../../components/UniversitiesContainer/AustriaUniversities/AustriaUniversities';
import AustriaImg from "../../assests/AustriaHeroImg.jpg";
import AustriaFlag from "../../assests/AustriaFlagImg.png";
import uni_1 from "../../assests/UnivOfVienna.jpg";
import uni_2 from "../../assests/UnivOfGraz.png";
import uni_3 from "../../assests/Karl-FranzensUniv.png";
import uni_4 from "../../assests/UnivOfInnsbruck.png";
import uni_5 from "../../assests/UnivOfSalzburg.jpg";
import uni_6 from "../../assests/WebsterUniv.jpg";
import uni_7 from "../../assests/CentralEuropeanUniv.png";



const AustriaUni = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <CountryHome
        rel_country_img={AustriaImg}
        rel_country_name="AUSTRIA"
        img_dec_prop=""
      />
      <AustriaCountry rel_country_flag={AustriaFlag} here_we_go_again="" />
      <AustriaUniversities
        Austria_uni_img1={uni_1}
        Austria_uni1="University of Vienna:"
        Austria_uni_img2={uni_2}
        Austria_uni2="University of Graz:"
        Austria_uni_img3={uni_3}
        Austria_uni3="Karl-Franzens Graz: University"
        Austria_uni_img4={uni_4}
        Austria_uni4="University of Innsbruck:"
        Austria_uni_img5={uni_5}
        Austria_uni5="University of Salzburga"
        Austria_uni_img6={uni_6}
        Austria_uni6="Webster University Vienna"
        Austria_uni_img7={uni_7}
        Austria_uni7="Central European University"
      />
      <PopCourses />
    </div>
  );
};

export default AustriaUni;
