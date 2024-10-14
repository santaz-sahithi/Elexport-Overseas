import React from 'react';
import './FranceUniversities.css';


function FranceUniversities(props) {
  const France_uni1 = props.France_uni1;
  const France_uni2 = props.France_uni2;
  const France_uni3 = props.France_uni3;
  const France_uni4 = props.France_uni4;
  const France_uni5 = props.France_uni5;
  const France_uni6 = props.France_uni6;
  const France_uni7 = props.France_uni7;
  const France_uni8 = props.France_uni8;
  const France_uni9 = props.France_uni9;

  const France_uni_img1 = props.France_uni_img1;
  const France_uni_img2 = props.France_uni_img2;
  const France_uni_img3 = props.France_uni_img3;
  const France_uni_img4 = props.France_uni_img4;
  const France_uni_img5 = props.France_uni_img5;
  const France_uni_img6 = props.France_uni_img6;
  const France_uni_img7 = props.France_uni_img7;
  const France_uni_img8 = props.France_uni_img8;
  const France_uni_img9 = props.France_uni_img9;



  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='France_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name1'>{France_uni1}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name2'>{France_uni2}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name3'>{France_uni3}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name4'>{France_uni4}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name5'>{France_uni5}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name6'>{France_uni6}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name7'>{France_uni7}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img8} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name8'>{France_uni8}</div>
            </div>
            <div className='France_uni_images'>
              <div><img src = {France_uni_img9} alt = {here_we_go_again}/></div>     
              <div className='France_uni_name9'>{France_uni9}</div>
            </div>
          </div>
    </div>
  )
}

export default FranceUniversities;