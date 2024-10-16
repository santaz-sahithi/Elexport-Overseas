import React from 'react';
import './UKUniversities.css';


function UKUniversities(props) {
  const UK_uni1 = props.UK_uni1;
  const UK_uni2 = props.UK_uni2;
  const UK_uni3 = props.UK_uni3;
  const UK_uni4 = props.UK_uni4;
  const UK_uni5 = props.UK_uni5;
  const UK_uni6 = props.UK_uni6;
  const UK_uni7 = props.UK_uni7;
  const UK_uni8 = props.UK_uni8;
  const UK_uni9 = props.UK_uni9;
  const UK_uni_img1 = props.UK_uni_img1;
  const UK_uni_img2 = props.UK_uni_img2;
  const UK_uni_img3 = props.UK_uni_img3;
  const UK_uni_img4 = props.UK_uni_img4;
  const UK_uni_img5 = props.UK_uni_img5;
  const UK_uni_img6 = props.UK_uni_img6;
  const UK_uni_img7 = props.UK_uni_img7;
  const UK_uni_img8 = props.UK_uni_img8;
  const UK_uni_img9 = props.UK_uni_img9;

  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='UK_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name1'>{UK_uni1}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name2'>{UK_uni2}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name3'>{UK_uni3}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name4'>{UK_uni4}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name5'>{UK_uni5}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name6'>{UK_uni6}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name7'>{UK_uni7}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img8} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name8'>{UK_uni8}</div>
            </div>
            <div className='UK_uni_images'>
              <div><img src = {UK_uni_img9} alt = {here_we_go_again}/></div>     
              <div className='UK_uni_name9'>{UK_uni9}</div>
            </div>
          </div>
    </div>
  )
}

export default UKUniversities;