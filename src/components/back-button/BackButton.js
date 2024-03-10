import React from 'react';
import './backButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="backbutton-container" onClick={() => navigate.goBack()}>
      <div className="back-button-background">
        <FontAwesomeIcon icon="chevron-left" className="back-arrow"/>
      </div>
    </div>
  )
}

export default BackButton;