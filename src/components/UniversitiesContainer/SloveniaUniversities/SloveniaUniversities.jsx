import React from 'react';
import './SloveniaUniversities.css';


function SloveniaUniversities(props) {
  const pop_uni1 = props.pop_uni1;
  const pop_uni2 = props.pop_uni2;
  const pop_uni3 = props.pop_uni3;
  const pop_uni4 = props.pop_uni4;
  const pop_uni_img1 = props.pop_uni_img1;
  const pop_uni_img2 = props.pop_uni_img2;
  const pop_uni_img3 = props.pop_uni_img3;
  const pop_uni_img4 = props.pop_uni_img4;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='pop_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='pop_uni_images'>
              <div><img src = {pop_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='pop_uni_name1'>{pop_uni1}</div>
            </div>
            <div className='pop_uni_images'>
              <div><img src = {pop_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='pop_uni_name2'>{pop_uni2}</div>
            </div>
            <div className='pop_uni_images'>
              <div><img src = {pop_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='pop_uni_name3'>{pop_uni3}</div>
            </div>
            <div className='pop_uni_images'>
              <div><img src = {pop_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='pop_uni_name4'>{pop_uni4}</div>
            </div>
          </div>
    </div>
  )
}

export default SloveniaUniversities;