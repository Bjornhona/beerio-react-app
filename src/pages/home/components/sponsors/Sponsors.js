import React from 'react';
import './sponsors.css';

const Sponsors = () => {

  const sponsorsData = {
    images: [
      {
        link: "/home",
        logo: ""
      },
      {
        link: "/beers",
        logo: ""
      },
      {
        link: "/breweries",
        logo: ""
      },
    ]
  }
  
  const renderLogos = () => {
    return (
        sponsorsData.images.map((slide, index) => {
            return (
                slide.link !== "" ?
                <a key={index} href={`${slide.link}`}><img src={`${slide.logo}`} alt="sponsor"/></a>
                :
                <img key={index} src={`${slide.logo}`} alt="sponsor"/>
            )
        })
    );
  }

  return (
      <div className="sponsors-container">
          <span data-testid="title" className='title'>{sponsorsData.title}</span>
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