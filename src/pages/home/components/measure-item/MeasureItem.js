import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './measureItem.css';

const MeasureItem = (props) => {
  const {measureValue, measureIcon, measureIconColor, measureDescription, left} = props;

  return (
    <div className={left ? "measure-item left" : "measure-item right"}>
      <h2>{measureValue}</h2>
      <FontAwesomeIcon className="measure-icon" icon={measureIcon} color={measureIconColor}/>
      <p>{measureDescription}</p>
    </div>
  )
}

export default MeasureItem;