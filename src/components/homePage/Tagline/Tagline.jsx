import React from "react";
import './Tagline.css';

const Tagline = () => {
  const characters = ['<', '<', '<', '<', '\u00A0', 'W','e', '\u00A0', 'K','n','o','w', '\u00A0', 'Y','o', 'u','r','\u00A0', 'D','r','e','a','m','s','\u00A0', '>', '>', '>', '>'];

  return (
    <div className = "bg-color-tagline">
    <div className="tagline-container">
      <div className="tagline-box">
        <h2>
          {characters.map((char, index) => (
            <span key={index} style={{ '--i': index + 1 }}>{char}</span> 
          ))}
        </h2>
      </div>
    </div>
    </div>
  );
};

export default Tagline;
