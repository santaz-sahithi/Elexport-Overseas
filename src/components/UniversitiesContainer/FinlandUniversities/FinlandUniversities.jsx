import React from 'react';
import './FinlandUniversities.css';


function FinlandUniversities(props) {
  const Fin_uni1 = props.Fin_uni1;
  const Fin_uni2 = props.Fin_uni2;
  const Fin_uni3 = props.Fin_uni3;
  const Fin_uni4 = props.Fin_uni4;
  const Fin_uni5 = props.Fin_uni5;
  const Fin_uni6 = props.Fin_uni6;
  const Fin_uni7 = props.Fin_uni7;
  const Fin_uni_img1 = props.Fin_uni_img1;
  const Fin_uni_img2 = props.Fin_uni_img2;
  const Fin_uni_img3 = props.Fin_uni_img3;
  const Fin_uni_img4 = props.Fin_uni_img4;
  const Fin_uni_img5 = props.Fin_uni_img5;
  const Fin_uni_img6 = props.Fin_uni_img6;
  const Fin_uni_img7 = props.Fin_uni_img7;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Fin_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Fin_uni_images'>
              <div><img src = {Fin_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Fin_uni_name1'>{Fin_uni1}</div>
            </div>
            <div className='Fin_uni_images'>
              <div><img src = {Fin_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Fin_uni_name2'>{Fin_uni2}</div>
            </div>
            <div className='Fin_uni_images'>
              <div><img src = {Fin_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Fin_uni_name3'>{Fin_uni3}</div>
            </div>
            <div className='Fin_uni_images'>
              <div><img src = {Fin_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Fin_uni_name4'>{Fin_uni4}</div>
            </div>
            <div className='Fin_uni_images'>
              <div><img src = {Fin_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Fin_uni_name5'>{Fin_uni5}</div>
            </div>
            <div className='Fin_uni_images'>
              <div><img src = {Fin_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='Fin_uni_name6'>{Fin_uni6}</div>
            </div>
            <div className='Fin_uni_images'>
              <div><img src = {Fin_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='Fin_uni_name7'>{Fin_uni7}</div>
            </div>
          </div>
    </div>
  )
}

export default FinlandUniversities;