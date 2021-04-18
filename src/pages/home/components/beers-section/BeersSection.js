import React from 'react';
import './beersSection.css';
import Button from '../../../../components/button/Button';
import MeasureItem from '../measure-item/MeasureItem';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

const BeersSection = () => {
  const root = document.querySelector(':root');
  const rootStyles = getComputedStyle(root);

  return (
    <div className="beers-section">
      <div className="inner-content">
        <h2>Explore the best beers in the world.</h2>
        <h6>Search among thousands of beers worldwide and keep track of your favorites.</h6>
        <Button link="/play" text="Explore"/>
      </div>
      <div className="right-measures">
        <MeasureItem 
          measureIcon={faHeart} 
          measureDescription="My Favorites" 
          measureIconColor={rootStyles.getPropertyValue('--red')}
          measureValue="25"
        />
      </div>
    </div>
  )
}

export default BeersSection;