
import React from 'react';
import './UKCountry.css';

function UKCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='UK-why-rel-country-container-UK'>
      <div className='UK-why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-UK">
        <div className='UK-child1'>
          <p>The UK boasts world-class universities across England, Scotland, Wales, and Northern Ireland.</p>
        </div>
        <div className='UK-child2'>
          <p>English is the official language, making communication easy for international students.</p>
        </div>
        <div className='UK-child3'>
          <p>FThe UK offers a rich educational heritage and diverse academic programs.</p>
        </div>
        <div className='UK-child4'>
          <p>A multicultural society and vibrant student life enhance the study abroad experience.</p>
        </div>
        <div className='UK-child5'>
          <p>British pound sterling (£) is the currency, offering stability for international students.</p>
        </div>
      </div>
    </div>
  )
}

export default UKCountry;
