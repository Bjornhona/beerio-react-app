import React from 'react';
import './beersSection.css';
import Button from '../../../../components/button/Button';
import MeasureItem from '../measure-item/MeasureItem';
import worldImage from "./world-map-146505_1280.png";
import beerSplashImage from "./water-2748670_1920(1).png";
import beerGlassImage from "./beer-3622242_1920.png";
import wheatImage from "./wheat-5834926_640.png";

const BeersSection = () => {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);

  return (
    <div className="beers-section outer-content">
      <div className="beers-content">
        <div className="left-beers-content">
          <h2>Explore the best beers in the world.</h2>
          <h6>Search among thousands of beers worldwide and keep track of your favorites.</h6>
        </div>
        
        <div className="explore-button">
          <Button link="/beers" text="Beers" darkShadow/>
        </div>

        <div className="middle-beers-content">
          <h1>Explore</h1>
          <div><img className="world-image" src={worldImage} alt="world map"/></div>
          <img className="beer-splash-image" src={beerSplashImage} alt="beer splash"/>
          <img className="beer-glass-image" src={beerGlassImage} alt="glass of beer"/>
          <img className="wheat-image" src={wheatImage} alt="wheat"/>
        </div>

        <div className="right-beers-content">
          <MeasureItem 
            measureIcon="heart" 
            measureDescription="My Favorites" 
            measureIconColor={rootStyles.getPropertyValue('--red')}
            measureValue="25"
          />
          <MeasureItem 
            measureIcon="beer" 
            measureDescription="Wanna try" 
            measureIconColor={rootStyles.getPropertyValue('--yellow')}
            measureValue="64"
          />
          <MeasureItem 
            measureIcon="skull" 
            measureDescription="Never again" 
            measureIconColor={rootStyles.getPropertyValue('--lighter-brown')}
            measureValue="12"
          />
        </div>
      </div>
    </div>
  )
}

export default BeersSection;