import React, { useRef, useEffect } from "react";
import Mycard from "./Mycard.js";
import "./ExploreSection.css";

import Australiaicon from "../../../assests/Australia.jpg";
import USAicon from "../../../assests/usa.jpg";
import Germanyicon from "../../../assests/Germany.jpg";
import Canadaicon from "../../../assests/Canada.jpg";
import UKicon from "../../../assests/uk.jpg";
import Latviaicon from "../../../assests/LatviaExplore.jpg";
import Lithuaniaicon from "../../../assests/LithuaniaExplore.jpg";
import Franceicon from "../../../assests/FranceExplore.jpg";
import Swedenicon from "../../../assests/SwedenExplore.jpg";
import Finlandicon from "../../../assests/FinlandExplore.jpg";
import Irelandicon from "../../../assests/IrelandExplore.jpg";
import Maltaicon from "../../../assests/MaltaExplore.jpg";
import Sloveniaicon from "../../../assests/SloveniaExplore.jpg";
import Hungaryicon from "../../../assests/HungaryExplore.jpg";
import Austriaicon from "../../../assests/AustriaExplore.jpg";

const imageSources = [
  Australiaicon,
  USAicon,
  Germanyicon,
  Canadaicon,
  UKicon,
  Latviaicon,
  Lithuaniaicon,
  Franceicon,
  Swedenicon,
  Finlandicon,
  Irelandicon,
  Maltaicon,
  Sloveniaicon,
  Hungaryicon,
  Austriaicon
];

const ExploreSection = () => {
  const boxRef = useRef(null); // Create a ref to the product-container

  // Preload images
  useEffect(() => {
    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const btnpressprev = () => {
    let cardWidth = boxRef.current.querySelector(".my-card").clientWidth; // Get width of a single card
    boxRef.current.scrollLeft -= cardWidth + 20; // Move by two cards' width
  };

  const btnpressnext = () => {
    let cardWidth = boxRef.current.querySelector(".my-card").clientWidth;
    boxRef.current.scrollLeft += cardWidth + 20;
  };

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="explore-heading">
        <h1>Explore the Best of the World</h1>
      </div>
      <div className="product-container" ref={boxRef}>
        <Mycard className="my-card" cardno="1" imgSrc={USAicon} countryName="USA" />
        <Mycard className="my-card" cardno="2" imgSrc={Australiaicon} countryName="Australia" />
        <Mycard className="my-card" cardno="3" imgSrc={Germanyicon} countryName="Germany" />
        <Mycard className="my-card" cardno="4" imgSrc={Canadaicon} countryName="Canada" />
        <Mycard className="my-card" cardno="5" imgSrc={UKicon} countryName="UK" />
        <Mycard className="my-card" cardno="6" imgSrc={Latviaicon} countryName="Latvia" />
        <Mycard className="my-card" cardno="7" imgSrc={Lithuaniaicon} countryName="Lithuania" />
        <Mycard className="my-card" cardno="8" imgSrc={Franceicon} countryName="France" />
        <Mycard className="my-card" cardno="9" imgSrc={Swedenicon} countryName="Sweden" />
        <Mycard className="my-card" cardno="10" imgSrc={Finlandicon} countryName="Finland" />
        <Mycard className="my-card" cardno="11" imgSrc={Irelandicon} countryName="Ireland" />
        <Mycard className="my-card" cardno="12" imgSrc={Maltaicon} countryName="Malta" />
        <Mycard className="my-card" cardno="13" imgSrc={Sloveniaicon} countryName="Slovenia" />
        <Mycard className="my-card" cardno="14" imgSrc={Austriaicon} countryName="Austria" />
        <Mycard className="my-card" cardno="15" imgSrc={Hungaryicon} countryName="Hungary" />
      </div>
    </div>
  );
};

export default ExploreSection;
