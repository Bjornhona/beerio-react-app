import React from 'react';
import './homeHeader.css';
import Button from '../../../../components/button/Button';

const HomeHeader = () => {
  return (
    <header>
      <div className="header-content">
        <h2>Welcome to the world of beers.</h2>
        <Button className="button" link="/play" text="Play"/>
      </div>
    </header>
  )
}

export default HomeHeader;