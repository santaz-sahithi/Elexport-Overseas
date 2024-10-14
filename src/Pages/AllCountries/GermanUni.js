import React, { useEffect } from 'react'
import { PopCourses, CountryHome  } from '../../components/UniversitiesContainer';
import GermanCountry from '../../components/UniversitiesContainer/GermanCountry/GermanCountry';
import GermanUniversities from '../../components/UniversitiesContainer/GermanUniversities/GermanUniversities';
import GermanyImg from '../../assests/Germany_Bg_img.jpg';
import GermanFlag from '../../assests/Germany_Bg_img.jpg';
import uni_1 from '../../assests/Germany_Bg_img.jpg';
import uni_2 from '../../assests/Germany_Bg_img.jpg';
import uni_3 from '../../assests/Germany_Bg_img.jpg';
import uni_4 from '../../assests/Germany_Bg_img.jpg';
import uni_5 from '../../assests/Germany_Bg_img.jpg';



const GermanUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome rel_country_img = {GermanyImg} rel_country_name = "GERMANY" img_dec_prop = ""/>
      <GermanCountry rel_country_flag = {GermanFlag} here_we_go_again = ""/> 
      <GermanUniversities German_uni_img1 = {uni_1} German_uni1 = "Kühne Logistics University" German_uni_img2 = {uni_2} German_uni2 = "Tech University of Munich" German_uni_img3 = {uni_3} German_uni3 = "ESMT Berlin" German_uni_img4 = {uni_4} German_uni4 = "Heidelberg University" German_uni_img5 = {uni_5} German_uni5 = "University of Mannheim"/>    
      <PopCourses /> 

    </div>
  )
}

export default GermanUni
