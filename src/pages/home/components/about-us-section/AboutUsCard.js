import React from 'react';
import './AboutUsCard.css';

const AboutUsCard = ({text, image}) => {
  return (
    <div className="about-us-card">
      <div><img src={image} alt="about-us-text"/></div>
      <p>{text}</p>
    </div>
  )
}

export default AboutUsCard;