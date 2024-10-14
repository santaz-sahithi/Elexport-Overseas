import React from 'react';
import './maltaUniversities.css';


function MaltaUniversities(props) {
  const Malta_uni1 = props.Malta_uni1;
  const Malta_uni2 = props.Malta_uni2;
  const Malta_uni3 = props.Malta_uni3;
  const Malta_uni_img1 = props.Malta_uni_img1;
  const Malta_uni_img2 = props.Malta_uni_img2;
  const Malta_uni_img3 = props.Malta_uni_img3;
  const here_we_go_again = props.here_we_go_again;


  return (
    <div className='Malta_universities'>
      <h1>Popular Universities</h1>
      <div className='werty'>

        {Malta_uni1 && Malta_uni_img1 && (
          <div className='Malta_uni_images'>
            <div><img src={Malta_uni_img1} alt={here_we_go_again} /></div>
            <div className='Malta_uni_name1'>{Malta_uni1}</div>
          </div>
        )}
        {Malta_uni2 && Malta_uni_img2 && (
          <div className='Malta_uni_images'>
            <div><img src={Malta_uni_img2} alt={here_we_go_again} /></div>
            <div className='Malta_uni_name2'>{Malta_uni2}</div>
          </div>
        )}
        
        {Malta_uni3 && Malta_uni_img3 && (
          <div className='Malta_uni_images'>
            <div><img src={Malta_uni_img3} alt={here_we_go_again} /></div>
            <div className='Malta_uni_name3'>{Malta_uni3}</div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MaltaUniversities;