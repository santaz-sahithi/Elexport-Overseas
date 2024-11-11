import React from 'react';
import './SwedenCountry.css';

function SwedenCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='Swe-why-rel-country-container'>
      <div className='Swe-why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="Swe-rel-text">
        <div className='Swe-child1'>
          <p>Sweden offers high-quality education with a supportive environment for international students.</p>
        </div>
        <div className='Swe-child2'>
          <p>Over 1,000 degree programs are taught entirely in English, attracting students globally.</p>
        </div>
        <div className='Swe-child3'>
          <p>International students in Sweden can work part-time or full-time during their studies.</p>
        </div>
        <div className='Swe-child4'>
          <p>Students gain valuable practical skills through work <br/> experience during studies.</p>
        </div>
        <div className='Swe-child5'>
          <p>After graduation, a 6-month permit allows job hunting in Sweden.</p>
        </div>
      </div>
    </div>
  )
}

export default SwedenCountry;
