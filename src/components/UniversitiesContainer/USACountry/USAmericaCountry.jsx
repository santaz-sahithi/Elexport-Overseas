// rsfce
import React from 'react';
import './USAmericaCountry.css';

function USAmericaCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-USA">
        <div className='USA-child1'>
          <p>The USA offers top-tier universities and unparalleled academic opportunities.</p>
        </div>
        <div className='USA-child2'>
          <p>Explore career paths in the US, a dynamic and innovative economy.</p>
        </div>
        <div className='USA-child3'>
          <p>Pathways to permanent residency allow for a long-term future in the USA.</p>
        </div>
        <div className='USA-child4'>
          <p>The U.S. boasts renowned academic programs and cutting-edge research facilities.</p>
        </div>
        <div className='USA-child5'>
          <p>Recent visa updates make the US an even more accessible study destination.</p>
        </div>
      </div>
    </div>
  )
}

export default USAmericaCountry;
