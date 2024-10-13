import React from 'react';
import './HungaryUniversities.css';


function HungaryUniversities(props) {
  const Hun_uni1 = props.Hun_uni1;
  const Hun_uni2 = props.Hun_uni2;
  const Hun_uni3 = props.Hun_uni3;
  const Hun_uni4 = props.Hun_uni4;
  const Hun_uni5 = props.Hun_uni5;
  const Hun_uni6 = props.Hun_uni6;
  
  const Hun_uni_img1 = props.Hun_uni_img1;
  const Hun_uni_img2 = props.Hun_uni_img2;
  const Hun_uni_img3 = props.Hun_uni_img3;
  const Hun_uni_img4 = props.Hun_uni_img4;
  const Hun_uni_img5 = props.Hun_uni_img5;
  const Hun_uni_img6 = props.Hun_uni_img6;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Hun_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Hun_uni_images'>
              <div><img src = {Hun_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Hun_uni_name1'>{Hun_uni1}</div>
            </div>
            <div className='Hun_uni_images'>
              <div><img src = {Hun_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Hun_uni_name2'>{Hun_uni2}</div>
            </div>
            <div className='Hun_uni_images'>
              <div><img src = {Hun_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Hun_uni_name3'>{Hun_uni3}</div>
            </div>
            <div className='Hun_uni_images'>
              <div><img src = {Hun_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Hun_uni_name4'>{Hun_uni4}</div>
            </div>
            <div className='Hun_uni_images'>
              <div><img src = {Hun_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Hun_uni_name5'>{Hun_uni5}</div>
            </div>
            <div className='Hun_uni_images'>
              <div><img src = {Hun_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='Hun_uni_name6'>{Hun_uni6}</div>
            </div>
          </div>
    </div>
  )
}

export default HungaryUniversities;