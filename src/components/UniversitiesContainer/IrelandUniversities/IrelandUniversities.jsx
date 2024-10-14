import React from 'react';
import './IrelandUniversities.css';


function IrelandUniversities(props) {
  const Ireland_uni1 = props.Ireland_uni1;
  const Ireland_uni2 = props.Ireland_uni2;
  const Ireland_uni3 = props.Ireland_uni3;
  const Ireland_uni4 = props.Ireland_uni4;
  const Ireland_uni5 = props.Ireland_uni5;
  const Ireland_uni6 = props.Ireland_uni6;
  const Ireland_uni7 = props.Ireland_uni7;
  const Ireland_uni_img1 = props.Ireland_uni_img1;
  const Ireland_uni_img2 = props.Ireland_uni_img2;
  const Ireland_uni_img3 = props.Ireland_uni_img3;
  const Ireland_uni_img4 = props.Ireland_uni_img4;
  const Ireland_uni_img5 = props.Ireland_uni_img5;
  const Ireland_uni_img6 = props.Ireland_uni_img6;
  const Ireland_uni_img7 = props.Ireland_uni_img7;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Ireland_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Ireland_uni_images'>
              <div><img src = {Ireland_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Ireland_uni_name1'>{Ireland_uni1}</div>
            </div>
            <div className='Ireland_uni_images'>
              <div><img src = {Ireland_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Ireland_uni_name2'>{Ireland_uni2}</div>
            </div>
            <div className='Ireland_uni_images'>
              <div><img src = {Ireland_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Ireland_uni_name3'>{Ireland_uni3}</div>
            </div>
            <div className='Ireland_uni_images'>
              <div><img src = {Ireland_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Ireland_uni_name4'>{Ireland_uni4}</div>
            </div>
            <div className='Ireland_uni_images'>
              <div><img src = {Ireland_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Ireland_uni_name5'>{Ireland_uni5}</div>
            </div>
            <div className='Ireland_uni_images'>
              <div><img src = {Ireland_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='Ireland_uni_name2'>{Ireland_uni6}</div>
            </div>
            <div className='Ireland_uni_images'>
              <div><img src = {Ireland_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='Ireland_uni_name3'>{Ireland_uni7}</div>
            </div>
          </div>
    </div>
  )
}

export default IrelandUniversities;