import React from 'react';
import './beersSection.css';
import Button from '../../../../components/button/Button';
import MeasureItem from '../measure-item/MeasureItem';
import {faHeart, faBeer, faSkull} from '@fortawesome/free-solid-svg-icons';

const BeersSection = () => {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);

  return (
    <div className="beers-section">
      <div className="beers-content">
        <div className="left-beers-content">
          <h2>Explore the best beers in the world.</h2>
          <h6>Search among thousands of beers worldwide and keep track of your favorites.</h6>
          <Button link="/play" text="Explore"/>
        </div>

        <div className="middle-beers-content"></div>

        <div className="right-beers-content">
          <MeasureItem 
            measureIcon={faHeart} 
            measureDescription="My Favorites" 
            measureIconColor={rootStyles.getPropertyValue('--red')}
            measureValue="25"
          />
          <MeasureItem 
            measureIcon={faBeer} 
            measureDescription="Want to try" 
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
    </div>
  )
}

export default BeersSection;