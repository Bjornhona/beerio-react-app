import React from 'react';
import './backButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  return (
    <div className="backbutton-container" onClick={() => history.goBack()}>
      <div className="back-button-background">
        <FontAwesomeIcon icon={faChevronLeft} className="back-arrow"/>
      </div>
    </div>
  )
}

export default BackButton;