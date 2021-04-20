import React from 'react';
import './beersSection.css';
import Button from '../../../../components/button/Button';
import MeasureItem from '../measure-item/MeasureItem';
import {faHeart, faBeer, faSkull} from '@fortawesome/free-solid-svg-icons';
import waterColorImage from "./watercolor-4629342_1920.png";
import beerSplashImage from "./water-2748670_1920.png";
import beerGlassImage from "./beer-3622242_1920.png";

const BeersSection = () => {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);

  return (
    <div className="beers-section">
      <div className="beers-content">
        <div className="left-beers-content">
          <h2>Explore the best beers in the world.</h2>
          <h6>Search among thousands of beers worldwide and keep track of your favorites.</h6>
        </div>
          {/* <Button className="explore-button" link="/play" text="Explore"/> */}
          <div className="explore-button">
        <Button link="/play" text="Explore"/>
      </div>

        <div className="middle-beers-content">
          <h1>Explore</h1>
          <div><img className="water-color-image" src={waterColorImage} alt="water color"/></div>
          <img className="beer-splash-image" src={beerSplashImage} alt="beer splash"/>
          <img className="beer-glass-image" src={beerGlassImage} alt="glass of beer"/>
        </div>

        <div className="right-beers-content">
          <MeasureItem 
            measureIcon={faHeart} 
            measureDescription="My Favorites" 
            measureIconColor={rootStyles.getPropertyValue('--red')}
            measureValue="25"
          />
          <MeasureItem 
            measureIcon={faBeer} 
            measureDescription="Wanna try" 
            measureIconColor={rootStyles.getPropertyValue('--yellow')}
            measureValue="64"
          />
          <MeasureItem 
            measureIcon={faSkull} 
            measureDescription="Never again" 
            measureIconColor={rootStyles.getPropertyValue('--lighter-brown')}
            measureValue="12"
          />
        </div>
      </div>
      {/* <div className="explore-button">
        <Button link="/play" text="Explore"/>
      </div> */}
    </div>
  )
}

export default BeersSection;