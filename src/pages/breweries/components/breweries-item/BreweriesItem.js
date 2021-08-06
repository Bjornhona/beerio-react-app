import React from 'react';
import './breweriesItem.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const BreweriesItem = ({breweryData, setBrewery}) => {
  const icon = breweryData.images.squareMedium;

  return (
    <Link to={{pathname: `/breweries/${breweryData.id}`}} onClick={() => setBrewery(breweryData)} >
      <div className='beers-item-content'>
        {icon && 
          <img src={icon} alt={breweryData.name} />
        }
        <div className="beers-item-center">
          <div className="beer-text">
            <h6><strong>{breweryData.name}</strong></h6>
            <p>{breweryData.established}</p>
          </div>
          <div className="organic">
            <p><strong>Breweries: </strong>{breweryData.locations && breweryData.locations.length}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={faChevronRight} className="arrow"/>
      </div>
    </Link>
  )
}
  
export default BreweriesItem;