import React from 'react';
import './AustriaUniversities.css';


function AustriaUniversities(props) {
  const Austria_uni1 = props.Austria_uni1;
  const Austria_uni2 = props.Austria_uni2;
  const Austria_uni3 = props.Austria_uni3;
  const Austria_uni4 = props.Austria_uni4;
  const Austria_uni5 = props.Austria_uni5;
  const Austria_uni6 = props.Austria_uni6;
  const Austria_uni7 = props.Austria_uni7;

  const Austria_uni_img1 = props.Austria_uni_img1;
  const Austria_uni_img2 = props.Austria_uni_img2;
  const Austria_uni_img3 = props.Austria_uni_img3;
  const Austria_uni_img4 = props.Austria_uni_img4;
  const Austria_uni_img5 = props.Austria_uni_img5;
  const Austria_uni_img6 = props.Austria_uni_img6;
  const Austria_uni_img7 = props.Austria_uni_img7;


  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Austria_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Austria_uni_images'>
              <div><img src = {Austria_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Austria_uni_name1'>{Austria_uni1}</div>
            </div>
            <div className='Austria_uni_images'>
              <div><img src = {Austria_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Austria_uni_name2'>{Austria_uni2}</div>
            </div>
            <div className='Austria_uni_images'>
              <div><img src = {Austria_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Austria_uni_name3'>{Austria_uni3}</div>
            </div>
            <div className='Austria_uni_images'>
              <div><img src = {Austria_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Austria_uni_name4'>{Austria_uni4}</div>
            </div>
            <div className='Austria_uni_images'>
              <div><img src = {Austria_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Austria_uni_name5'>{Austria_uni5}</div>
            </div>
            <div className='Austria_uni_images'>
              <div><img src = {Austria_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='Austria_uni_name6'>{Austria_uni6}</div>
            </div>
            <div className='Austria_uni_images'>
              <div><img src = {Austria_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='Austria_uni_name7'>{Austria_uni7}</div>
            </div>
          </div>
    </div>
  )
}

export default AustriaUniversities;