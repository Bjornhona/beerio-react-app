import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css';

const Error = (props) => {

  const goBack = () => {
    props.history.goBack();
  }

  return (
    <div className="index-div section">
      <h1>Internal Error</h1>
      <Link to='/home' className="beer-container beer-top" onClick={goBack}>
        <span role="img" aria-label="left-angle-bracket">〈 Return to previous</span>
      </Link>
    </div>
  );
}

export default Error;