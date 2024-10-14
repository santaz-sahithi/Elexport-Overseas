import React from 'react';
import './FranceCountry.css';

function FranceCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='why-rel-country-container'>
      <div className='why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-France">
        <div className='France-child1'>
          <p>France is home to top-ranked institutions like Sorbonne University and École Polytechnique</p>
        </div>
        <div className='France-child2'>
          <p>Universities offer a wide variety of programs to suit international students career goals..</p>
        </div>
        <div className='France-child3'>
          <p>France offers affordable tuition fees with plenty of scholarships available for international students.</p>
        </div>
        <div className='France-child4'>
          <p>Learning French can enhance your cultural experience and career prospects globally.</p>
        </div>
        <div className='France-child5'>
          <p>France also offers a wide range of English taught programs that can be  easily applied.</p>
        </div>
      </div>
    </div>
  )
}

export default FranceCountry;
