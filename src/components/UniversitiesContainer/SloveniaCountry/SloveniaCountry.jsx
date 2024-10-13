
import React from 'react';
import './SloveniaCountry.css';

function SloveniaCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-slo">
        <div className='slo-child1'>
          <p>High standard of living and affordable tuition make Slovenia an attractive study destination.</p>
        </div>
        <div className='slo-child2'>
          <p>Excellent education system with universities offering programs taught in English.</p>
        </div>
        <div className='slo-child3'>
          <p>Slovenia’s easy application process requires only English proficiency and basic academic documents.</p>
        </div>
        <div className='slo-child4'>
          <p>Student visa support and straightforward entry for non-EU/EEA students.</p>
        </div>
        <div className='slo-child5'>
          <p>Cultural richness and natural beauty enhance the overall study experience in Slovenia</p>
        </div>
      </div>
    </div>
  )
}

export default SloveniaCountry;
