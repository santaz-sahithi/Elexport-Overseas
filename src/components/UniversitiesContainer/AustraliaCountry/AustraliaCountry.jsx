// rsfce
import React from 'react';
import './AustraliaCountry.css';

function AboutCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Aus">
        <div className='Australia-child1'>
          <p>Australia offers world-class universities and globally recognized education.</p>
        </div>
        <div className='Australia-child2'>
          <p>International students can benefit from post-study work visas to gain experience.</p>
        </div>
        <div className='Australia-child3'>
          <p>Stunning landscapes and vibrant culture make Australia an attractive study destination.</p>
        </div>
        <div className='Australia-child4'>
          <p>Australia offers pathways to permanent residency for eligible graduates.</p>
        </div>
        <div className='Australia-child5'>
          <p>With a thriving economy and multicultural society, Australia is perfect for a long-term future.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCountry;
