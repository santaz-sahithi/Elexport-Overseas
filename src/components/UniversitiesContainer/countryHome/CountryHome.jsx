import React from 'react';
import './countryHome.css';

function CountryHome(props) {
  // rel here means relevant
  const rel_country_img = props.rel_country_img;
  const rel_country_name = props.rel_country_name;
  const img_dec_prop = props.img_dec_prop;

  return (
      <div className="country-name-img-container">
          <img src={rel_country_img} alt={img_dec_prop}/>
          <h1 className='rel-country-name'>STUDY IN {rel_country_name}</h1>
      </div>
  );
}

export default CountryHome;
