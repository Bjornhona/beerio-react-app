import React from 'react';
import './sponsors.css';
import logos from './images/imageExporter';

const Sponsors = () => {
  
  const renderLogos = () => {
    return (
        logos.map((image, index) => <img key={index} src={`${image}`} alt="sponsor"/>)
    );
  }

  return (
      <div className="sponsors-container">
          <span data-testid="title" className='title'><h2>Sponsors.</h2></span>
          <div className="sliding-logos">
              <div className="logos-container">
                  {renderLogos()}
              </div>
              <div className="logos-container-two">
                  {renderLogos()}
              </div>
          </div>
      </div>
  );
};

export default Sponsors;