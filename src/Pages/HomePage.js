import React from 'react'
import Herosection from '../components/homePage/HeroSection/HeroSection';
import Tagline from '../components/homePage/Tagline/Tagline';
import ExploreSection from '../components/homePage/ExploreSection/ExploreSection';
import WhyWereTheBestChoice from '../components/homePage/WhyWereTheBestChoice/WhyWereTheBestChoice';
// import OurServices from '../components/homePage/OurServices/OurServices';
import AboutUs from '../components/homePage/AboutUs/AboutUs';
import OurMission from '../components/homePage/OurMission/OurMission';
import OurVision from '../components/homePage/OurVision/OurVision';
import LatestNews from '../components/homePage/LatestNews/LatestNews';
import QA from '../components/homePage/Q&A/QA';
// import Navbar from '../components/navbar/Navbar';


const HomePage = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Herosection />
        <Tagline/>      
        <QA/>
        <ExploreSection/> 
        <WhyWereTheBestChoice/>
        {/* <OurServices/> */}
        <AboutUs/> 
        <OurMission/>
        <OurVision/>    
        <LatestNews/>         
    </div>
  )
}

export default HomePage
