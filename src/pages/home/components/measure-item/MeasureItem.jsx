import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './measureItem.css';

const MeasureItem = (props) => {
  const {measureValue, measureIcon, measureIconColor, measureDescription, left} = props;

  return (
    <div className={left ? "measure-item left" : "measure-item right"}>
      <FontAwesomeIcon className="measure-icon" icon={measureIcon} color={measureIconColor}/>
      <div>
        <h2>{measureValue}</h2>
        <p>{measureDescription}</p>
      </div>
    </div>
  )
}

export default MeasureItem;