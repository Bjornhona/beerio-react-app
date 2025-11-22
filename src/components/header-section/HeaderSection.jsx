import React from 'react';
import './headerSection.css';
import Button from '../button/Button';

const HeaderSection = ({headline, breadText, image, buttonText, buttonLink}) => {

  return (
    <header style={{backgroundImage: `url(${image})`}}>
      <span className="header-gradient-overlay">
        <div className="inner-content">
          <h2>{headline}.</h2>
          <h6>{breadText}</h6>
          {buttonText && <Button link={buttonLink} text={buttonText}/>}
        </div>
      </span>
    </header>
  )
}

export default HeaderSection;