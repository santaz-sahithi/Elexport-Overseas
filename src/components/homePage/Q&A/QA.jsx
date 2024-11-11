import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './QA.css'; // Import the CSS file

const TypewriterEffect = () => {
  return (
    <div className='bg-color-qa'>
    <div className="container">
      <h3 className="question">Do you know why people choose to study abroad</h3>
      <TypeAnimation
        sequence={[
          `You'll immerse yourself in a new language.\nStudying abroad is one of the best ways to acquire global skills and access personal and professional opportunities.\nYou'll also explore cultural immersion, personal development, career opportunities, and many other reasons.`,
          10,
          '',
          50,
        ]}
        speed={50}
        className="typewriter-text"
        repeat={999}
      />
    </div>
    </div>
  );
};

export default TypewriterEffect;
