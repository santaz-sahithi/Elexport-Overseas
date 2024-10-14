import React from 'react';
import './SloveniaUniversities.css';


function SloveniaUniversities(props) {
  const Slovenia_uni1 = props.Slovenia_uni1;
  const Slovenia_uni2 = props.Slovenia_uni2;
  const Slovenia_uni3 = props.Slovenia_uni3;
  const Slovenia_uni4 = props.Slovenia_uni4;
  const Slovenia_uni_img1 = props.Slovenia_uni_img1;
  const Slovenia_uni_img2 = props.Slovenia_uni_img2;
  const Slovenia_uni_img3 = props.Slovenia_uni_img3;
  const Slovenia_uni_img4 = props.Slovenia_uni_img4;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Slovenia_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Slovenia_uni_images'>
              <div><img src = {Slovenia_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Slovenia_uni_name1'>{Slovenia_uni1}</div>
            </div>
            <div className='Slovenia_uni_images'>
              <div><img src = {Slovenia_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Slovenia_uni_name2'>{Slovenia_uni2}</div>
            </div>
            <div className='Slovenia_uni_images'>
              <div><img src = {Slovenia_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Slovenia_uni_name3'>{Slovenia_uni3}</div>
            </div>
            <div className='Slovenia_uni_images'>
              <div><img src = {Slovenia_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Slovenia_uni_name4'>{Slovenia_uni4}</div>
            </div>
          </div>
    </div>
  )
}

export default SloveniaUniversities;