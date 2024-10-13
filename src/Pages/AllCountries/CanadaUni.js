import React from 'react'

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
  return (
    <div> <CountryHome rel_country_img={CanadaImg} rel_country_name="CANADA" img_dec_prop="" />
      <AboutCountry2 rel_country_flag={Canada2} here_we_go_again="" />
      <CanadaUniversities pop_uni_img1={uni1} pop_uni1="University of Manitoba " pop_uni_img2={uni2} pop_uni2="University of Waterloo" pop_uni_img3={uni3} pop_uni3="Lakehead University" pop_uni_img4={uni4} pop_uni4="University of Regina" pop_uni_img5={uni5} pop_uni5="Cape Breton University" pop_uni_img6={uni6} pop_uni6="Conestoga" pop_uni_img7={uni7} pop_uni7="Fanshawe" pop_uni_img8={uni8} pop_uni8="Georgian" pop_uni_img9={uni9} pop_uni9="Centennial College" pop_uni_img10={uni10} pop_uni10="Sheridan" pop_uni_img11={uni11} pop_uni11="Niagra College" pop_uni_img12={uni12} pop_uni12="Fleming" />
      <PopCourses /> </div>
  )
}

export default CanadaUni