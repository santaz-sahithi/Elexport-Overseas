import React, { useEffect } from 'react'

import CanadaImg from '../../assests/canada1.jpg';
import Canada2 from '../../assests/canada2.jpg';
import uni1 from '../../assests/1University of Manitoba.jpg';
import uni2 from '../../assests/University of Waterloo.png';
import uni3 from '../../assests/Lakehead University.jpg';
import uni4 from '../../assests/University of Regina.jpg';
import uni5 from '../../assests/cape breton uc.jpg';
import uni6 from '../../assests/CONESTOGA.jpg';
import uni7 from '../../assests/FANSHAWE.jpg';
import uni8 from '../../assests/GEORGIAN.jpeg';
import uni9 from '../../assests/CENTENNIAL COLLEGE.jpg';
import uni10 from '../../assests/SHERIDAN.jpg';
import uni11 from '../../assests/Niagra College.webp';
import uni12 from '../../assests/FLEMING.jpeg';
import CountryHome from '../../components/UniversitiesContainer/countryHome/CountryHome';
import AboutCountry2 from '../../components/UniversitiesContainer/CanadaCountry/AboutCountry2';
import CanadaUniversities from '../../components/UniversitiesContainer/CanadaUniversities/CanadaUniversities';
import PopCourses from '../../components/UniversitiesContainer/popCourses/PopCourses';

function CanadaUni() {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  
  return (
    <div> <CountryHome rel_country_img={CanadaImg} rel_country_name="CANADA" img_dec_prop="" />
      <AboutCountry2 rel_country_flag={Canada2} here_we_go_again="" />
      <CanadaUniversities Canada_uni_img1={uni1} Canada_uni1="University of Manitoba " Canada_uni_img2={uni2} Canada_uni2="University of Waterloo" Canada_uni_img3={uni3} Canada_uni3="Lakehead University" Canada_uni_img4={uni4} Canada_uni4="University of Regina" Canada_uni_img5={uni5} Canada_uni5="Cape Breton University" Canada_uni_img6={uni6} Canada_uni6="Conestoga" Canada_uni_img7={uni7} Canada_uni7="Fanshawe" Canada_uni_img8={uni8} Canada_uni8="Georgian" Canada_uni_img9={uni9} Canada_uni9="Centennial College" Canada_uni_img10={uni10} Canada_uni10="Sheridan" Canada_uni_img11={uni11} Canada_uni11="Niagra College" Canada_uni_img12={uni12} Canada_uni12="Fleming" />
      <PopCourses /> 
    </div>
  )
}

export default CanadaUni;