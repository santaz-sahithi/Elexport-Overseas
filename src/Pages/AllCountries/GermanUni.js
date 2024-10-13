import React from 'react'
import { CountryHome, AboutCountry, PopCourses, PopUniversities  } from '../components/UniversitiesContainer';
import GermanyImg from './assets/Rectangle 6.png';
import GermanFlag from './assets/Rectangle 6.png';
import uni_1 from './assets/image.png';
import uni_2 from './assets/image.png';
import uni_3 from './assets/image.png';
import uni_4 from './assets/image.png';
import uni_5 from './assets/image.png';



const GermanUni = () => {
  return (
    <div>
      <CountryHome rel_country_img = {GermanyImg} rel_country_name = "GERMANY" img_dec_prop = ""/>
      
      <AboutCountry rel_country_flag = {GermanFlag} here_we_go_again = ""/> 
      <PopUniversities pop_uni_img1 = {uni_1} pop_uni1 = "Kühne Logistics University" pop_uni_img2 = {uni_2} pop_uni2 = "Tech University of Munich" pop_uni_img3 = {uni_3} pop_uni3 = "ESMT Berlin" pop_uni_img4 = {uni_4} pop_uni4 = "Heidelberg University" pop_uni_img5 = {uni_5} pop_uni5 = "University of Mannheim"/>    
      <PopCourses /> 
      
    </div>
  )
}

export default GermanUni
