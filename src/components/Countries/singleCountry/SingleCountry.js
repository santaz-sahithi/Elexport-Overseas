import React from "react";
import "./SingleCountry.css";
import { Link } from "react-router-dom";

const SingleCountry = (props) => {

  return (
    <Link to={`/${props.title.replace(/\s+/g, '')}Uni`} className="country">
      <div className="country_div" >
        <img className="country_img"src={props.img} alt={props.alt}></img><h2 className="country_title">{props.title}</h2>
      </div>
      <div className="country_text">
        <p className="country_p">{props.text}</p>
      </div>
    </Link>
  );
};

export default SingleCountry;
