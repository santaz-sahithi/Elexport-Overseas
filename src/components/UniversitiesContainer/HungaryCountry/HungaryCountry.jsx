import React from 'react';
import './HungaryCountry.css';

function HungaryCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Hun">
        <div className='Hun-child1'>
          <p>Hungary is a vibrant Central European nation with Budapest as its capital.</p>
        </div>
        <div className='Hun-child2'>
          <p>Hungary boasts a rich history and strong national identity.</p>
        </div>
        <div className='Hun-child3'>
          <p>Budapest is a cultural hub with diverse architecture.</p>
        </div>
        <div className='Hun-child4'>
          <p>Hungary has warm summers and cold, snowy winters.</p>
        </div>
        <div className='Hun-child5'>
          <p>Renowned for its intellectual heritage, including figures like John von Neumann.</p>
        </div>
      </div>
    </div>
  )
}

export default HungaryCountry;