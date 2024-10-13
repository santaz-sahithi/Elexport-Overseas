import React from 'react';
import './App.css';
import { useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Countries from './Pages/Countries.js';
import Services from './Pages/services.js';
// import GermanUni from './Pages/AllCountries/GermanUni.js';
import Footer from './components/footer/Footer.jsx';
import ContactUs from './components/contactUs/Contactus.js'
import Home from './Pages/HomePage.js';
import IrelandUni from './Pages/AllCountries/IrelandUni.js';
import FinlandUni from './Pages/AllCountries/FinlandUni.js';
import FreshNavbar from './components/navbar/Navbar.js';
import SloveniamericaUni from './Pages/AllCountries/SloveniaUni.js';
import USAmericaUni from './Pages/AllCountries/USAmericaUni.js';
import AustraliaUni from './Pages/AllCountries/AustraliaUni.js';
import MaltaUni from './Pages/AllCountries/MaltaUni.js';
import SwedenUni from './Pages/AllCountries/SwedenUni.js';
import HungaryUni from './Pages/AllCountries/HungaryUni.js';
import CanadaUni from './Pages/AllCountries/CanadaUni.js';
import LatviaUni from './Pages/AllCountries/LatviaUni.js';

function App() {
  useEffect(() => {
    document.title = 'Elexport Overseas';
      }, []);

  return (
    <div className = "App">
      <BrowserRouter>
      <FreshNavbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path = '/Home' element = {<Home />}/>
          {/* <Route path = '/GermanUni' element={<GermanUni />}/> */}
          <Route path = '/Countries' element={<Countries />}/>
          <Route path = '/Services' element = {<Services />}/>
          <Route path = '/ContactUs' element = {<ContactUs />}/>
          <Route path = '/IrelandUni' element = {<IrelandUni/>}/>
          <Route path = '/FinlandUni' element = {<FinlandUni />}/>  
          <Route path = '/SloveniaUni'element = {<SloveniamericaUni/>}/>       
          <Route path = '/USAmericaUni' element = {<USAmericaUni/>}/> 
          <Route path = '/AustraliaUni' element = {<AustraliaUni />}/>
          <Route path = '/MaltaUni' element = {< MaltaUni/>}/>
          <Route path = '/SwedenUni' element = {<SwedenUni />}/>
          <Route path = '/HungaryUni'element = {<HungaryUni />}/>
          <Route path = '/CanadaUni' element = {<CanadaUni />}/>
          <Route path = '/LatviaUni' element = {<LatviaUni />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <CountryList/> */}
    </div>
  )
} 

export default App
