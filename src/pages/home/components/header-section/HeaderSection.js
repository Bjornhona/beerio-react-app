import React from 'react';
import './headerSection.css';
import Button from '../../../../components/button/Button';

const HeaderSection = () => {
  return (
    <header>
      <div className="inner-content">
        <h2>Explore the world of beers.</h2>
        <Button link="/play" text="Play"/>
      </div>
    </header>
  )
}

export default HeaderSection;