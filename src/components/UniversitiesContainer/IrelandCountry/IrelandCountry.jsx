import React from 'react';
import './IrelandCountry.css';

function IrelandCountry(props) {
  const rel_country_flag = props.rel_country_flag;
  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='Ire-why-rel-country-container'>
      <div className='Ire-why-rel-country-container-flag'>
        <img src = {rel_country_flag} alt = {here_we_go_again}/>
      </div>
      <div className="rel-text-Ire">
        <div className='Ire-child1'>
          <p>Ireland offers a compelling combination of academic excellence, career opportunities, and cultural richness.</p>
        </div>
        <div className='Ire-child2'>
          <p>With top universities and a welcoming atmosphere, it's ideal for international students.</p>
        </div>
        <div className='Ire-child3'>
          <p>Irish universities rank highly worldwide, offering a range of English-taught programs.</p>
        </div>
        <div className='Ire-child4'>
          <p>Thriving sectors like IT and engineering provide strong career prospects.</p>
        </div>
        <div className='Ire-child5'>
          <p>Ireland’s research excellence opens doors to innovative projects.</p>
        </div>
      </div>
    </div>
  )
}

export default IrelandCountry;
