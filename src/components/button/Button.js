import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = (props) => {
  const { link, text, shadow, darkShadow, action } = props;
  const className = shadow ? "common-button shadow" : (darkShadow ? "common-button dark-shadow" : "common-button");
  const content = <p>{text}</p>

  return (
    action ?
      <div onClick={action} className={className}>
        {content}
      </div>
      :
      <Link to={link} className={className}>
        {content}
      </Link>
  );
}

export default Button;