
import React from 'react';
import './AustriaCountry.css';

function AustriaCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Austria">
        <div className='Austria-child1'>
          <p>Austria offers a world-class education with globally recognized universities..</p>
        </div>
        <div className='Austria-child2'>
          <p>Austria provides affordable tuition, making it cost-effective for students.</p>
        </div>
        <div className='Austria-child3'>
          <p>High quality of life in Austria, enriched by its vibrant culture, deep history, and modern amenities.</p>
        </div>
        <div className='Austria-child4'>
          <p>Austria’s stunning landscapes offer abundant outdoor activities year-round.</p>
        </div>
        <div className='Austria-child5'>
          <p>Centrally located Austria is ideal for travel and cultural experiences.</p>
        </div>
      </div>
    </div>
  )
}

export default AustriaCountry;
