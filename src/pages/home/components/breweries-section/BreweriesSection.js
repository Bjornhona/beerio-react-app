import React from 'react';
import './breweriesSection.css';
import Button from '../../../../components/button/Button';
import MeasureItem from '../measure-item/MeasureItem';
import {faHeart, faBeer, faSkull} from '@fortawesome/free-solid-svg-icons';
import backgroundColorImage from "./watercolor-4629348_1920.png";
import brewerySplashImage from "./water-2748695_1920.png";
import barrelImage from "./barrel-1875819_1920.png";

const BreweriesSection = () => {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);

  return (
    <div className="breweries-section">
      <div className="breweries-content">
        <div className="right-breweries-content">
          <h2>Visit  breweries in your area.</h2>
          <h6>Find out the best breweries in your area. Pick and save the places you would like to visit on the map.</h6>
        </div>
        
        <div className="breweries-button">
          <Button link="/play" text="Explore" shadow/>
        </div>

        <div className="middle-breweries-content">
          <h1>Breweries</h1>
          <div><img className="background-color-image" src={backgroundColorImage} alt="water color"/></div>
          <img className="brewery-splash-image" src={brewerySplashImage} alt="brewery splash"/>
          <img className="barrel-image" src={barrelImage} alt="beer barrel"/>
        </div>

        <div className="right-beers-content">
          <MeasureItem 
            measureIcon={faHeart} 
            measureDescription="My Favorites" 
            measureIconColor={rootStyles.getPropertyValue('--green')}
            measureValue="15"
            left
          />
          <MeasureItem 
            measureIcon={faBeer} 
            measureDescription="Wanna try" 
            measureIconColor={rootStyles.getPropertyValue('--orange')}
            measureValue="23"
            left
          />
          <MeasureItem 
            measureIcon={faSkull} 
            measureDescription="Never again" 
            measureIconColor={rootStyles.getPropertyValue('--dark-brown')}
            measureValue="9"
            left
          />
        </div>
      </div>
    </div>
  );
};

export default BreweriesSection;