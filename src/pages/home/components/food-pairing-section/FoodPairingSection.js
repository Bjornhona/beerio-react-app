import React from 'react';
import './foodPairingSection.css';
import Button from '../../../../components/button/Button';
import waterColorImage from "./watercolor-4629342_1920.png";
import chichenwingsPlate from "./food-3327977_1920.png";

const FoodPairingSection = () => {
  // const root = document.querySelector(':root');

  return (
    <div className="food-section outer-content">
      <div className="food-content">
        <div className="left-food-content">
          <h2>Excellent beer and food pairing.</h2>
          <h6>Learn about the rules when it comes to making beer and food pairings and discover all it’s different flavors.</h6>
        </div>
        
        <div className="explore-food-button">
          <Button link="/food-pairing" text="Food Pairing" darkShadow/>
        </div>

        <div className="middle-food-content">
          <div><img className="water-food-image" src={waterColorImage} alt="water color"/></div>
          <h1>Food Pairing</h1>
          <img className="chicken-wings-image" src={chichenwingsPlate} alt="chicken wings plate"/>
        </div>
      </div>
    </div>
  );
};

export default FoodPairingSection;