import React from 'react';
import './GermanUniversities.css';

function GermanUniversities(props) {
  const German_uni1 = props.German_uni1;
  const German_uni2 = props.German_uni2;
  const German_uni3 = props.German_uni3;
  const German_uni4 = props.German_uni4;
  const German_uni5 = props.German_uni5;
  const German_uni6 = props.German_uni6;
  const German_uni7 = props.German_uni7;
  const German_uni8 = props.German_uni8;
  const German_uni9 = props.German_uni9;
  const German_uni10 = props.German_uni10;

  const German_uni_img1 = props.German_uni_img1;
  const German_uni_img2 = props.German_uni_img2;
  const German_uni_img3 = props.German_uni_img3;
  const German_uni_img4 = props.German_uni_img4;
  const German_uni_img5 = props.German_uni_img5;
  const German_uni_img6 = props.German_uni_img6;
  const German_uni_img7 = props.German_uni_img7;
  const German_uni_img8 = props.German_uni_img8;
  const German_uni_img9 = props.German_uni_img9;
  const German_uni_img10 = props.German_uni_img10;

  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='German_universities'>
      <h1>Germanular Universities</h1>
      <div className='werty'>

        {German_uni1 && German_uni_img1 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img1} alt={here_we_go_again} /></div>
            <div className='German_uni_name1'>{German_uni1}</div>
          </div>
        )}
        {German_uni2 && German_uni_img2 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img2} alt={here_we_go_again} /></div>
            <div className='German_uni_name2'>{German_uni2}</div>
          </div>
        )}
        
        {German_uni3 && German_uni_img3 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img3} alt={here_we_go_again} /></div>
            <div className='German_uni_name3'>{German_uni3}</div>
          </div>
        )}
        
        {German_uni4 && German_uni_img4 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img4} alt={here_we_go_again} /></div>
            <div className='German_uni_name4'>{German_uni4}</div>
          </div>
        )}
        
        {German_uni5 && German_uni_img5 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img5} alt={here_we_go_again} /></div>
            <div className='German_uni_name5'>{German_uni5}</div>
          </div>
        )}
        {German_uni5 && German_uni_img6 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img6} alt={here_we_go_again} /></div>
            <div className='German_uni_name6'>{German_uni6}</div>
          </div>
        )}
        {German_uni5 && German_uni_img7 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img7} alt={here_we_go_again} /></div>
            <div className='German_uni_name7'>{German_uni7}</div>
          </div>
        )}
        {German_uni5 && German_uni_img8 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img8} alt={here_we_go_again} /></div>
            <div className='German_uni_name8'>{German_uni8}</div>
          </div>
        )}
        {German_uni5 && German_uni_img9 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img9} alt={here_we_go_again} /></div>
            <div className='German_uni_name9'>{German_uni9}</div>
          </div>
        )}
        {German_uni5 && German_uni_img10 && (
          <div className='German_uni_images'>
            <div><img src={German_uni_img10} alt={here_we_go_again} /></div>
            <div className='German_uni_name10'>{German_uni10}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GermanUniversities;