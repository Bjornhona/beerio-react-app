import React from 'react';
import './BeersItem.css';
import { Link } from 'react-router-dom';
import Heart from '../heart/Heart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const BeersItem = ({id, name, isOrganic, icon, style}) => {

  return (
    <Link to={`/beers/${id}`} >
      <div className='beers-container'>
      <div className='img-name-div'>
        {icon && <img src={icon} alt={name} />}
        <div className="beer-name">
          <h6><strong>{name}</strong></h6>
          <p>{style}</p>
          <div className="organic">
            <p><strong>Organic: </strong>{isOrganic}</p>
            <Heart
              id={id}
              name={name}
              isOrganic={isOrganic}
              icon={icon}
              style={style}
            />
          </div>
        </div>
          <FontAwesomeIcon className="arrow" icon={faChevronRight}/>
        </div>
      </div>
    </Link>
  )
}
  
export default BeersItem;