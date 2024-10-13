// rsfce
import React from 'react';
import './MaltaCountry.css';

function AboutCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Mal">
        <div className='Mal-child1'>
          <p>Malta offers stunning beaches, rich history, and affordable education opportunities.</p>
        </div>
        <div className='Mal-child2'>
          <p>Universities in Malta provide English-taught programs, making it ideal for international students.</p>
        </div>
        <div className='Mal-child3'>
          <p>Malta’s low tuition fees are a major advantage for those seeking higher education.</p>
        </div>
        <div className='Mal-child4'>
          <p>Students enjoy a culturally diverse experience and a warm Mediterranean climate.</p>
        </div>
        <div className='Mal-child5'>
          <p>With programs in fields like business, medicine, and engineering, Malta is a top choice.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCountry;
