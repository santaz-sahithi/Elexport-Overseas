
import React from 'react';
import './LithuaniaCountry.css';

function LithuaniaCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='Lith-why-rel-country-container'>
      <div className='Lith-why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Lithuania">
        <div className='Lithuania-child1'>
          <p>Low tuition fees and affordable living costs compared to other European countries.</p>
        </div>
        <div className='Lithuania-child2'>
          <p>Lithuania has become an increasingly popular destination for international students.</p>
        </div>
        <div className='Lithuania-child3'>
          <p>Explore Lithuania's vibrant culture, beautiful landscapes, and historical sites.</p>
        </div>
        <div className='Lithuania-child4'>
          <p>Provides a welcoming atmosphere with English widely spoken and a variety of scholarships available.</p>
        </div>
        <div className='Lithuania-child5'>
          <p>The Lithuanian language is relatively easy to learn for English speakers</p>
        </div>
      </div>
    </div>
  )
}

export default LithuaniaCountry;
