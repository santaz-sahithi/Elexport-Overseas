import React from 'react';
import '../SwedenUniversities/SwedenUniversities.css';


function SwedenUniversities(props) {
  const Swe_uni1 = props.Swe_uni1;
  const Swe_uni2 = props.Swe_uni2;
  const Swe_uni3 = props.Swe_uni3;
  const Swe_uni4 = props.Swe_uni4;
  const Swe_uni5 = props.Swe_uni5;
  const Swe_uni6 = props.Swe_uni6;
  const Swe_uni7 = props.Swe_uni7;
  const Swe_uni8 = props.Swe_uni8;
  const Swe_uni9 = props.Swe_uni9;
  const Swe_uni_img1 = props.Swe_uni_img1;
  const Swe_uni_img2 = props.Swe_uni_img2;
  const Swe_uni_img3 = props.Swe_uni_img3;
  const Swe_uni_img4 = props.Swe_uni_img4;
  const Swe_uni_img5 = props.Swe_uni_img5;
  const Swe_uni_img6 = props.Swe_uni_img6;
  const Swe_uni_img7 = props.Swe_uni_img7;
  const Swe_uni_img8 = props.Swe_uni_img8;
  const Swe_uni_img9 = props.Swe_uni_img9;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Swe_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name1'>{Swe_uni1}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name2'>{Swe_uni2}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name3'>{Swe_uni3}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name4'>{Swe_uni4}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name5'>{Swe_uni5}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name6'>{Swe_uni6}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name7'>{Swe_uni7}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img8} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name8'>{Swe_uni8}</div>
            </div>
            <div className='Swe_uni_images'>
              <div><img src = {Swe_uni_img9} alt = {here_we_go_again}/></div>     
              <div className='Swe_uni_name9'>{Swe_uni9}</div>
            </div>
          </div>
    </div>
  )
}

export default SwedenUniversities;