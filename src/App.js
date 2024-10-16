import React from 'react';
import './App.css';
import { useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Countries from './Pages/Countries.js';
import Services from './Pages/services.js';
import Footer from './components/footer/Footer.jsx';
import ContactUs from './components/contactUs/Contactus.js'
import Home from './Pages/HomePage.js';
import Navbar from './components/navbar/Navbar.js'; 
import IrelandUni from './Pages/AllCountries/IrelandUni.js'; //Done 1
import FinlandUni from './Pages/AllCountries/FinlandUni.js'; //Done 2
import SloveniamericaUni from './Pages/AllCountries/SloveniaUni.js'; //Done 3
import USAUni from './Pages/AllCountries/USAUni.js'; //Done 4
import AustraliaUni from './Pages/AllCountries/AustraliaUni.js'; //Done 5
import MaltaUni from './Pages/AllCountries/MaltaUni.js'; //Done 6
import SwedenUni from './Pages/AllCountries/SwedenUni.js';  //Done 7
import HungaryUni from './Pages/AllCountries/HungaryUni.js'; //Done 8
import CanadaUni from './Pages/AllCountries/CanadaUni.js'; // Done 9
import LatviaUni from './Pages/AllCountries/LatviaUni.js'; //Done 10
import FranceUni from './Pages/AllCountries/FranceUni.js'; //Done 11
import LithuaniaUni from './Pages/AllCountries/LithuaniaUni.js'; //Done 12
import AustriaUni from './Pages/AllCountries/AustriaUni.js'; //Done 13
import GermanUni from './Pages/AllCountries/GermanUni.js'; //Done 14 need to add more
import UKUni from './Pages/AllCountries/UKUni.js'; //Done 15

function App() {
  useEffect(() => {
    document.title = 'Elexport Overseas';
      }, []);

  return (
    <div className = "App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path = '/Home' element = {<Home />}/>
          <Route path = '/Countries' element={<Countries />}/>
          <Route path = '/Services' element = {<Services />}/>
          <Route path = '/ContactUs' element = {<ContactUs />}/>
          <Route path = '/IrelandUni' element = {<IrelandUni/>}/>
          <Route path = '/FinlandUni' element = {<FinlandUni />}/>  
          <Route path = '/SloveniaUni'element = {<SloveniamericaUni/>}/>       
          <Route path = '/USAUni' element = {<USAUni/>}/> 
          <Route path = '/AustraliaUni' element = {<AustraliaUni />}/>
          <Route path = '/MaltaUni' element = {< MaltaUni/>}/>
          <Route path = '/SwedenUni' element = {<SwedenUni />}/>
          <Route path = '/HungaryUni'element = {<HungaryUni />}/>
          <Route path = '/CanadaUni' element = {<CanadaUni />}/>
          <Route path = '/LatviaUni' element = {<LatviaUni />}/>
          <Route path = '/FranceUni' element = {<FranceUni />}/>
          <Route path = '/LithuaniaUni' element = {<LithuaniaUni />}/>
          <Route path = '/AustriaUni' element = {<AustriaUni />}/>
          <Route path = '/GermanUni' element={<GermanUni />}/> 
          <Route path = "/UKUni" element = {<UKUni />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <CountryList/> */}
    </div>
  )
} 

export default App
