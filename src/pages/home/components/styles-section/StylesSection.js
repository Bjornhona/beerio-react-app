import React from 'react';
import './stylesSection.css';
import Button from '../../../../components/button/Button';
import waterColorImage from "./watercolor-4629342_1920.png";
import beerStylesImage from "./beer-1777934_1920.png";

const StylesSection = () => {

  return (
    <div className="food-section outer-content">
      <div className="food-content">
        <div className="left-food-content">
          <h2>Find your inner beer style.</h2>
          <h6>Learn about all types of beer styles and discover all it’s different flavors.</h6>
        </div>
        
        <div className="explore-food-button">
          <Button link="/styles" text="Styles" darkShadow/>
        </div>

        <div className="middle-food-content">
          <div><img className="water-food-image" src={waterColorImage} alt="water color"/></div>
          <h1>Styles</h1>
          <img className="beer-styles-image" src={beerStylesImage} alt="beer glasses"/>
        </div>
      </div>
    </div>
  );
};

export default StylesSection;