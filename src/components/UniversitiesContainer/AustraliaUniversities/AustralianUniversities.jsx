import React from 'react';
import './AustraliaUniversities.css';


function AustraliaUniversities(props) {
  const Australia_uni1 = props.Australia_uni1;
  const Australia_uni2 = props.Australia_uni2;
  const Australia_uni3 = props.Australia_uni3;
  const Australia_uni4 = props.Australia_uni4;
  const Australia_uni5 = props.Australia_uni5;
  const Australia_uni6 = props.Australia_uni6;
  const Australia_uni7 = props.Australia_uni7;
  const Australia_uni8 = props.Australia_uni8;
  const Australia_uni_img1 = props.Australia_uni_img1;
  const Australia_uni_img2 = props.Australia_uni_img2;
  const Australia_uni_img3 = props.Australia_uni_img3;
  const Australia_uni_img4 = props.Australia_uni_img4;
  const Australia_uni_img5 = props.Australia_uni_img5;
  const Australia_uni_img6 = props.Australia_uni_img6;
  const Australia_uni_img7 = props.Australia_uni_img7;
  const Australia_uni_img8 = props.Australia_uni_img8;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Australia_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name1'>{Australia_uni1}</div>
            </div>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name2'>{Australia_uni2}</div>
            </div>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name3'>{Australia_uni3}</div>
            </div>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name4'>{Australia_uni4}</div>
            </div>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name5'>{Australia_uni5}</div>
            </div>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name6'>{Australia_uni6}</div>
            </div>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name7'>{Australia_uni7}</div>
            </div>
            <div className='Australia_uni_images'>
              <div><img src = {Australia_uni_img8} alt = {here_we_go_again}/></div>     
              <div className='Australia_uni_name8'>{Australia_uni8}</div>
            </div>
          </div>
    </div>
  )
}

export default AustraliaUniversities;