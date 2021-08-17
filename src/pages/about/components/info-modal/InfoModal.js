import React from 'react';
import './infoModal.css';
import Button from '../../../../components/button/Button';
import {faCheckCircle, faTimesCircle, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoModal = ({type, optionalMessage, onModalClick}) => {

  let color, icon, intro, message, buttonText, borderType;
  switch (type) {
    case 'success':
      color = `var(--green)`;
      icon = faCheckCircle;
      intro = 'Well done';
      message = optionalMessage ? optionalMessage : 'Your data was successfully sent/saved!';
      buttonText = 'OK';
      borderType = type;
      break;
    case 'fail':
      color = `var(--red)`;
      icon = faTimesCircle;
      intro = 'Oooops';
      message = optionalMessage ? optionalMessage : 'Something went wrong. Please try again.';
      buttonText = 'OK';
      borderType = type;
      break;
    default:
      color = `var(--orange)`;
      icon = faInfoCircle;
      intro = 'For your information';
      message = optionalMessage ? optionalMessage : 'Here goes a message.';
      buttonText = 'got it';
      borderType = 'other';
  }

  return (
    <div className="info-modal">
      <div className={`modal-card border-${borderType}`}>
        <div className="info-modal-content">
          <FontAwesomeIcon
            className="modal-info-icon"
            icon={icon}
            color={color}
          />
          <h4>{intro},</h4>
          <p className="info-message">
            {message}
          </p>
          <Button text={buttonText} action={onModalClick}/>
          </div>
      </div>
    </div>
  )
}

export default InfoModal;