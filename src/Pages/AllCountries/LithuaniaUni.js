import React from 'react'

import LithuaniaImg from './assets/lithuania/lithuania.jpg';
import LithuaniaFlag from './assets/lithuania/lithuania2.jpg';
import uni_1 from './assets/lithuania/Vilnius University.jpg';
import uni_2 from './assets/lithuania/Kazimieras Simonavicius University2.jpg';
import uni_3 from './assets/lithuania/Kaunas University of Technology2.jpg';
import uni_4 from './assets/lithuania/Vytautas Magnus University.jpg';
import uni_5 from './assets/lithuania/Lithuanian sports university.jpg';
import CountryHome4 from './UniversitiesContainer/countryHome/CountryHome4';
import AboutCountry4 from './UniversitiesContainer/aboutCountry/AboutCountry4';
import PopUniversities4 from './UniversitiesContainer/popUniversities/PopUniversities4';
import PopCourses4 from './UniversitiesContainer/popCourses/PopCourses4';


function LithuaniaUni() {
  return (
    <div>
      
      <CountryHome4 rel_country_img = {LithuaniaImg} rel_country_name = "LITHUANIA" img_dec_prop = ""/>
      <AboutCountry4 rel_country_flag = {LithuaniaFlag} here_we_go_again = ""/>
     <PopUniversities4 pop_uni_img1 = {uni_1} pop_uni1 = "Vilnius University" pop_uni_img2 = {uni_2} pop_uni2 = "Kazimieras Simonavicius University" pop_uni_img3 = {uni_3} pop_uni3 = "Kaunas University of Technology" pop_uni_img4 = {uni_4} pop_uni4 = "Vytautas Magnus University" pop_uni_img5 = {uni_5} pop_uni5 = "Lithuanian sports university"/>
      <PopCourses4/>
    </div>
  )
}

export default LithuaniaUni