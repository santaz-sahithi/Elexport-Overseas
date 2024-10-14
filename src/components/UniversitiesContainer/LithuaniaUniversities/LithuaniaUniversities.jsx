import React from 'react';
import './LithuaniaUniversities.css';


function LithuaniaUniversities(props) {
  const Lithuania_uni1 = props.Lithuania_uni1;
  const Lithuania_uni2 = props.Lithuania_uni2;
  const Lithuania_uni3 = props.Lithuania_uni3;
  const Lithuania_uni4 = props.Lithuania_uni4;
  const Lithuania_uni5 = props.Lithuania_uni5;

  const Lithuania_uni_img1 = props.Lithuania_uni_img1;
  const Lithuania_uni_img2 = props.Lithuania_uni_img2;
  const Lithuania_uni_img3 = props.Lithuania_uni_img3;
  const Lithuania_uni_img4 = props.Lithuania_uni_img4;
  const Lithuania_uni_img5 = props.Lithuania_uni_img5;

  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Lithuania_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Lithuania_uni_images'>
              <div><img src = {Lithuania_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Lithuania_uni_name1'>{Lithuania_uni1}</div>
            </div>
            <div className='Lithuania_uni_images'>
              <div><img src = {Lithuania_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Lithuania_uni_name2'>{Lithuania_uni2}</div>
            </div>
            <div className='Lithuania_uni_images'>
              <div><img src = {Lithuania_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Lithuania_uni_name3'>{Lithuania_uni3}</div>
            </div>
            <div className='Lithuania_uni_images'>
              <div><img src = {Lithuania_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Lithuania_uni_name4'>{Lithuania_uni4}</div>
            </div>
            <div className='Lithuania_uni_images'>
              <div><img src = {Lithuania_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Lithuania_uni_name5'>{Lithuania_uni5}</div>
            </div>
          </div>
    </div>
  )
}

export default LithuaniaUniversities;