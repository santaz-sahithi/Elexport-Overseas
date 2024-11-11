// rsfce
import React from 'react';
import './GermanCountry.css';

function AboutCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='Ger-why-rel-country-container'>
      <div className='Ger-why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Ger">
        <div className='Ger-child1'>
          <p>Germany offers world-class universities with a wide range of English-taught programs.</p>
        </div>
        <div className='Ger-child2'>
          <p>Affordable or low tuition fees make Germany a cost-effective option for higher education.</p>
        </div>
        <div className='Ger-child3'>
          <p>Excellent career prospects in Germany's booming industries like engineering, automobiles.</p>
        </div>
        <div className='Ger-child4'>
          <p>Strong focus on cutting-edge research and collaboration with renowned experts.
          </p>
        </div>
        <div className='Ger-child5'>
          <p>Germany’s multicultural society provides a welcoming environment for international students.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCountry;
