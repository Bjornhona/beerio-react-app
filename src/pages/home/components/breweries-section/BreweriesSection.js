import React from 'react';
import './breweriesSection.css';
import Button from '../../../../components/button/Button';
import MeasureItem from '../measure-item/MeasureItem';
import {faGlobeAmericas, faMapMarkedAlt, faSkull} from '@fortawesome/free-solid-svg-icons';
import backgroundColorImage from "./watercolor-4629348_1920(1).png";
import brewerySplashImage from "./water-2748695_1920(1).png";
import barrelImage from "./barrel-1875819_1920.png";

const BreweriesSection = () => {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);

  return (
    <div className="breweries-section outer-content">
      <div className="breweries-content">
        <div className="right-breweries-content">
          <h2>Visit  breweries in your area.</h2>
          <h6>Find out the best breweries in your area. Pick and save the places you would like to visit on the map.</h6>
        </div>
        
        <div className="breweries-button">
          <Button link="/breweries" text="Breweries" shadow/>
        </div>

        <div className="middle-breweries-content">
          <div><img className="background-color-image" src={backgroundColorImage} alt="water color"/></div>
          <img className="brewery-splash-image" src={brewerySplashImage} alt="brewery splash"/>
          <h1>Breweries</h1>
          <img className="barrel-image" src={barrelImage} alt="beer barrel"/>
        </div>

        <div className="left-breweries-content">
          <MeasureItem 
            measureIcon={faGlobeAmericas} 
            measureDescription="Great place" 
            measureIconColor={rootStyles.getPropertyValue('--green')}
            measureValue="15"
            left
          />
          <MeasureItem 
            measureIcon={faMapMarkedAlt} 
            measureDescription="Wanna go" 
            measureIconColor={rootStyles.getPropertyValue('--orange')}
            measureValue="23"
            left
          />
          <MeasureItem 
            measureIcon={faSkull} 
            measureDescription="No go" 
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