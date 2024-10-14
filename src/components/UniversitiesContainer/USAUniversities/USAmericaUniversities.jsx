import React from 'react';
import './USAmericaUniversities.css';


function USAmericaUniversities(props) {
  const USA_uni1 = props.USA_uni1;
  const USA_uni2 = props.USA_uni2;
  const USA_uni3 = props.USA_uni3;
  const USA_uni4 = props.USA_uni4;
  const USA_uni5 = props.USA_uni5;
  const USA_uni6 = props.USA_uni6;
  const USA_uni7 = props.USA_uni7;
  const USA_uni_img1 = props.USA_uni_img1;
  const USA_uni_img2 = props.USA_uni_img2;
  const USA_uni_img3 = props.USA_uni_img3;
  const USA_uni_img4 = props.USA_uni_img4;
  const USA_uni_img5 = props.USA_uni_img5;
  const USA_uni_img6 = props.USA_uni_img6;
  const USA_uni_img7 = props.USA_uni_img7;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='USA_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='USA_uni_images'>
              <div><img src = {USA_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='USA_uni_name1'>{USA_uni1}</div>
            </div>
            <div className='USA_uni_images'>
              <div><img src = {USA_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='USA_uni_name2'>{USA_uni2}</div>
            </div>
            <div className='USA_uni_images'>
              <div><img src = {USA_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='USA_uni_name3'>{USA_uni3}</div>
            </div>
            <div className='USA_uni_images'>
              <div><img src = {USA_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='USA_uni_name4'>{USA_uni4}</div>
            </div>
            <div className='USA_uni_images'>
              <div><img src = {USA_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='USA_uni_name5'>{USA_uni5}</div>
            </div>
            <div className='USA_uni_images'>
              <div><img src = {USA_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='USA_uni_name6'>{USA_uni6}</div>
            </div>
            <div className='USA_uni_images'>
              <div><img src = {USA_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='USA_uni_name7'>{USA_uni7}</div>
            </div>
          </div>
    </div>
  )
}

export default USAmericaUniversities;