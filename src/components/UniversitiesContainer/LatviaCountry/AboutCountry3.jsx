import React from 'react'
import './aboutCountry3.css'

function AboutCountry3(props) {
    const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Lat">
        <div className='Lat-child1'>
          <p>Low tuition fees and living costs, with scholarships available.</p>
        </div>
        <div className='Lat-child2'>
          <p> High-quality education with English-taught programs in various fields..</p>
        </div>
        <div className='Lat-child3'>
          <p>Friendly locals and a supportive community for international students.</p>
        </div>
        <div className='Lat-child4'>
          <p>Discover historical sites, museums, and stunning Baltic nature.</p>
        </div>
        <div className='Lat-child5'>
          <p>Latvia is the affordable cost of living. Compared to other European countries</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCountry3