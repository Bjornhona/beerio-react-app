import React from 'react';
import './BeersItem.css';
import { Link } from 'react-router-dom';
import Heart from '../heart/Heart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const BeersItem = ({id, name, isOrganic, icon, style}) => {

  return (
    <div className='beers-container'>
      <div className='img-name-div'>
        {icon && <img src={icon} alt={name} />}
        <div className="beer-name">
          <h6>{name}</h6>
          <p>{style}</p>
          <div className="organic"><p><strong>Organic: </strong>{isOrganic}</p></div>
        </div>
        <Link to={`/beers/${id}`} >
          <FontAwesomeIcon className="arrow" icon={faChevronRight}/>
        </Link>
      </div>
      {/* <div className="organic-heart"> */}
        {/* <div className="heart-div" > */}
          {/* <Heart
            id={id}
            name={name}
            isOrganic={isOrganic}
            icon={icon}
            style={style}
          /> */}
          {/* <Link to={`/beers/${id}`} > */}
            {/* <FontAwesomeIcon className="arrow" icon={faChevronRight}/> */}
            {/* <span role="img" className="arrow" aria-label="right-angle-bracket" >〉</span> */}
          {/* </Link> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}
  
export default BeersItem;