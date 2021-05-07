import React from 'react';
import Button from '../components/button/Button';
import './index-components/Index.css';

const Index = () => {
  
  return (
    <div className="index-div">
      {/* <span className="index-overlay"></span> */}
      <span className="index-box">
        <h3>The happy Beer Gormand</h3>
        <h1>Beerio</h1>
        <h6>Sign up to learn about your favorite beers. We'll help you remember the good moments!</h6>
        <div className="buttons-container">
          <Button link="/login" text='Log in' />
          <Button link="/signup" text='Sign up' />
        </div>
      </span>
    </div>
  );
}

export default Index;