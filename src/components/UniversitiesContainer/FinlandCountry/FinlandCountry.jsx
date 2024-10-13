// rsfce
import React from 'react';
import './FinlandCountry.css';

function FinlandCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Fin">
        <div className='Fin-child1'>
          <p>Finland’s universities, like Aalto and Helsinki, rank globally with programs in English.</p>
        </div>
        <div className='Fin-child2'>
          <p>Affordable living and tuition, with scholarships available.</p>
        </div>
        <div className='Fin-child3'>
          <p>Experience Finland’s lakes, forests, and traditional saunas.</p>
        </div>
        <div className='Fin-child4'>
          <p>Finland leads in renewable energy and eco-friendly living.</p>
        </div>
        <div className='Fin-child5'>
          <p>Balanced education and lifestyle for international students.</p>
        </div>
      </div>
    </div>
  )
}

export default FinlandCountry;
