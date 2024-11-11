import React from 'react'
import Herosection from '../components/homePage/HeroSection/HeroSection';
import Tagline from '../components/homePage/Tagline/Tagline';
import ExploreSection from '../components/homePage/ExploreSection/ExploreSection';
import WhyWereTheBestChoice from '../components/homePage/WhyWereTheBestChoice/WhyWereTheBestChoice';
import OurServices from '../components/homePage/OurServices/OurServices';
import AboutUs from '../components/homePage/AboutUs/AboutUs';
import OurMission from '../components/homePage/OurMission/OurMission';
import OurVision from '../components/homePage/OurVision/OurVision';
import LatestNews from '../components/homePage/LatestNews/LatestNews';
import QA from '../components/homePage/Q&A/QA';
import ReviewsSection from "../components/homePage/ReviewSection/ReviewSection";


const HomePage = () => {
  return (
    <div>
        <Herosection />
        <Tagline/>      
        <QA/>
        <ExploreSection/> 
        <WhyWereTheBestChoice/>
        <OurServices/>
        <AboutUs/> 
        <OurMission/>
        <OurVision/>    
        <ReviewsSection />
        <LatestNews/>  
    </div>
  )
}

export default HomePage
