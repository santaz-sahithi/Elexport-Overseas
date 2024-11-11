import React, { useEffect } from 'react'
import { PopCourses, CountryHome  } from '../../components/UniversitiesContainer';
import GermanCountry from '../../components/UniversitiesContainer/GermanCountry/GermanCountry';
import GermanUniversities from '../../components/UniversitiesContainer/GermanUniversities/GermanUniversities';
import GermanyImg from '../../assests/Germany_Bg_img.jpg';
import GermanFlag from '../../assests/GermanyFlagImg.jpg';
import uni_1 from '../../assests/Ger_uni-1.jpeg';
import uni_2 from '../../assests/Ger_uni-2.jpeg';
import uni_3 from '../../assests/Ger_uni-3.jpeg';
import uni_4 from '../../assests/Ger_uni-4.jpeg';
import uni_5 from '../../assests/Ger_uni-5.jpeg';
import uni_6 from '../../assests/Ger_uni-6.jpeg';
import uni_7 from '../../assests/Ger_uni-7.jpeg';
import uni_8 from '../../assests/Ger_uni-8.jpeg';
import uni_9 from '../../assests/Ger_uni-9.jpeg';
import uni_10 from '../../assests/Ger_uni-10.jpeg';



const GermanUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div>
      <CountryHome rel_country_img = {GermanyImg} rel_country_name = "GERMANY" img_dec_prop = ""/>
      <GermanCountry rel_country_flag = {GermanFlag} here_we_go_again = ""/> 
      <GermanUniversities German_uni_img1 = {uni_1} German_uni1 = "Freie University Berlin" German_uni_img2 = {uni_2} German_uni2 = "Tech University of Munich" German_uni_img3 = {uni_3} German_uni3 = "Ludwig Maximilian University" German_uni_img4 = {uni_4} German_uni4 = "Humbolt University" German_uni_img5 = {uni_5} German_uni5 = "RWTH Aachen University" German_uni_img6 = {uni_6} German_uni6 = "Heidelberg University" German_uni_img7 = {uni_7} German_uni7 = "Technical University" German_uni_img8 = {uni_8} German_uni8 = "Eberhard Karls University" German_uni_img9 = {uni_9} German_uni9 = "University of Freiburg" German_uni_img10 = {uni_10} German_uni10 = "University of Hamburg"/>    
      <PopCourses /> 

    </div>
  )
}

export default GermanUni
