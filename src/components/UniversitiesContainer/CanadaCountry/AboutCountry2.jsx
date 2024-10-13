import React from 'react'
import './aboutCountry2.css'


function AboutCountry2(props) {
    const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Can">
        <div className='Can-child1'>
          <p>Canada is home to globally renowned institutions like the University of Toronto, McGill University..</p>
        </div>
        <div className='Can-child2'>
          <p>Universities offer a wide variety of programs to suit international students career goals..</p>
        </div>
        <div className='Can-child3'>
          <p>Canada’s multicultural cities, vibrant festivals, and diverse cuisine provide a rich cultural experience.</p>
        </div>
        <div className='Can-child4'>
          <p>Canada ensures a supportive and inclusive environment for international students.</p>
        </div>
        <div className='Can-child5'>
          <p>Students can explore stunning landscapes, from the Rocky Mountains to bustling urban centers...</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCountry2