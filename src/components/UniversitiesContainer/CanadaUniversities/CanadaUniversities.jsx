import React from 'react'
import './CanadaUniversities.css'

function CanadaUniversities(props) {
  const Canada_uni1 = props.Canada_uni1;
  const Canada_uni2 = props.Canada_uni2;
  const Canada_uni3 = props.Canada_uni3;
  const Canada_uni4 = props.Canada_uni4;
  const Canada_uni5 = props.Canada_uni5;
  const Canada_uni6 = props.Canada_uni6;
  const Canada_uni7 = props.Canada_uni7;
  const Canada_uni8 = props.Canada_uni8;
  const Canada_uni9 = props.Canada_uni9;
  const Canada_uni10 = props.Canada_uni10;
  const Canada_uni11 = props.Canada_uni11;
  const Canada_uni12 = props.Canada_uni12;
  const Canada_uni_img1 = props.Canada_uni_img1;
  const Canada_uni_img2 = props.Canada_uni_img2;
  const Canada_uni_img3 = props.Canada_uni_img3;
  const Canada_uni_img4 = props.Canada_uni_img4;
  const Canada_uni_img5 = props.Canada_uni_img5;
  const Canada_uni_img6 = props.Canada_uni_img6;
  const Canada_uni_img7 = props.Canada_uni_img7;
  const Canada_uni_img8 = props.Canada_uni_img8;
  const Canada_uni_img9 = props.Canada_uni_img9;
  const Canada_uni_img10 = props.Canada_uni_img10;
  const Canada_uni_img11 = props.Canada_uni_img11;
  const Canada_uni_img12 = props.Canada_uni_img12;

  const here_we_go_again = props.here_we_go_again;
  return (
    <div className='Canada_universities'>
      <h1>Popular Universities</h1>
          <div className='werty'>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img1} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name1'>{Canada_uni1}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img2} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name2'>{Canada_uni2}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img3} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name3'>{Canada_uni3}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img4} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name4'>{Canada_uni4}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img5} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name5'>{Canada_uni5}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img6} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name6'>{Canada_uni6}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img7} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name7'>{Canada_uni7}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img8} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name8'>{Canada_uni8}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img9} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name9'>{Canada_uni9}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img10} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name10'>{Canada_uni10}</div>
            </div> 
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img11} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name11'>{Canada_uni11}</div>
            </div>
            <div className='Canada_uni_images'>
              <div><img src = {Canada_uni_img12} alt = {here_we_go_again}/></div>     
              <div className='Canada_uni_name12'>{Canada_uni12}</div>
            </div>
          </div>
    </div>
  )
}

export default CanadaUniversities