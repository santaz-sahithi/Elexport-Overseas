import React from 'react'
import FranceImg from './assets/France/france.jpg';
import FranceFlag from './assets/France/franceflag.jpg';
import uni1 from './assets/France/Queen Mary University of London Institute in Paris.jpg';
import uni2 from './assets/France/Skema Business School.jpg';
import uni3 from './assets/France/Rennes School of Business.jpg';
import uni4 from './assets/France/NEOMA Business School.jpg';
import uni5 from './assets/France/Institut supérieur d`électronique de Paris.jpg';
import uni6 from './assets/France/Burgundy School of Business.jpg';
import uni7 from './assets/France/ESSCA School of Management.jpg';
import uni8 from './assets/France/Institut supérieur du commerce de Paris.jpg';
import uni9 from './assets/France/Ecole.jpg';

import CountryHome5 from './UniversitiesContainer/countryHome/CountryHome5';
import AboutCountry5 from './UniversitiesContainer/aboutCountry/AboutCountry5';
import PopCourses5 from './UniversitiesContainer/popCourses/PopCourses5';
import PopUniversities5 from './UniversitiesContainer/popUniversities/PopUniversities5';

function FranceUni() {

  return (
    <div> <CountryHome5 rel_country_img = {FranceImg} rel_country_name = "FRANCE" img_dec_prop = ""/>
    <AboutCountry5 rel_country_flag = {FranceFlag} here_we_go_again = ""/> 
    <PopUniversities5 pop_uni_img1 = {uni1} pop_uni1 = "Queen Mary University of London Institute in Paris " pop_uni_img2 = {uni2} pop_uni2 = "Skema Business School" pop_uni_img3 = {uni3} pop_uni3 = "Rennes School of Business" pop_uni_img4 = {uni4} pop_uni4 = "NEOMA Business School" pop_uni_img5 = {uni5} pop_uni5 = "Institut supérieur d`électronique de Paris" pop_uni_img6 = {uni6} pop_uni6 = "Burgundy School of Business " pop_uni_img7 = {uni7} pop_uni7 = "ESSCA School of Management" pop_uni_img8 = {uni8} pop_uni8 = "Institut supérieur du commerce de Paris" pop_uni_img9 = {uni9} pop_uni9 = "Ecole Nationale Supérieure des Mines d'Alès" />    
    <PopCourses5 /> </div>
  )
}

export default FranceUni