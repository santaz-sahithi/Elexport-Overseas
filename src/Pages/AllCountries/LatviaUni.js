import React, { useEffect } from 'react'
import LatviaImg from '../../assests/latviaimg.jpg';
import Latvia2 from '../../assests/LatviaFlagImg.jpg';
import uni1 from '../../assests/kazimieras.jpeg';
import uni2 from '../../assests/Baltijas Starptautiskā Akadēmija.jpg';
import uni3 from '../../assests/Tio university of applied sciences.jpg';
import uni4 from '../../assests/TILBURG UNIVERSITY.jpg';
import uni5 from '../../assests/Univerza V Mariboru.jpg';
import uni6 from '../../assests/Vytautas Magnus University.jpg';
import uni7 from '../../assests/The RISEBA University.jpg';
import uni8 from '../../assests/Riga Stradins University.jpg';
import uni9 from '../../assests/Vilnius University.jpg';
import CountryHome from '../../components/UniversitiesContainer/countryHome/CountryHome';
import LatviaCountry from '../../components/UniversitiesContainer/LatviaCountry/AboutCountry3';
import LatviaUniversities from '../../components/UniversitiesContainer/LatviaUniversities/LatviaUniversities3';
import PopCourses from '../../components/UniversitiesContainer/popCourses/PopCourses';

const LatviaUni = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div> 
      <CountryHome rel_country_img = {LatviaImg} rel_country_name = "LATVIA" img_dec_prop = ""/>
      <LatviaCountry rel_country_flag = {Latvia2} here_we_go_again = ""/> 
      <LatviaUniversities pop_uni_img1 = {uni1} pop_uni1 = "Kazimieras Simonavicius University " pop_uni_img2 = {uni2} pop_uni2 = "Baltijas Starptautiskā Akadēmija" pop_uni_img3 = {uni3} pop_uni3 = "Tio university of applied sciences " pop_uni_img4 = {uni4} pop_uni4 = "Tilburg University" pop_uni_img5 = {uni5} pop_uni5 = "Univerza V Mariboru" pop_uni_img6 = {uni6} pop_uni6 = "Vytautas Magnus University " pop_uni_img7 = {uni7} pop_uni7 = "The Riseba University" pop_uni_img8 = {uni8} pop_uni8 = "Riga Stradins University" pop_uni_img9 = {uni9} pop_uni9 = "Vilnius University"/>    
      <PopCourses /> 
    </div>
  )
    
  
}

export default LatviaUni