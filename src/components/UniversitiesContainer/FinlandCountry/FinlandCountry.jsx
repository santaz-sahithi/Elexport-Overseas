// rsfce
import React from 'react';
import './FinlandCountry.css';

function FinlandCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='Fin-why-rel-country-container-Finland'>
      <div className='Fin-why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Fin">
        <div className='Fin-child1'>
          <p>France offers a rich study abroad experience with world-class universities and vibrant cities.</p>
        </div>
        <div className='Fin-child2'>
          <p>Top institutions like Sorbonne University and École Polytechnique rank globally for academic excellence.</p>
        </div>
        <div className='Fin-child3'>
          <p>French universities offer diverse programs in English, spanning business, engineering, and the arts.</p>
        </div>
        <div className='Fin-child4'>
          <p>Students can enjoy France's iconic landmarks, from the Eiffel Tower to the French Riviera.</p>
        </div>
        <div className='Fin-child5'>
          <p>While many courses are in English, learning French enhances cultural immersion and opportunities.</p>
        </div>
      </div>
    </div>
  )
}

export default FinlandCountry;
