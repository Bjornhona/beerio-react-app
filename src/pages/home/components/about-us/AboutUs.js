import React from 'react';
import AboutUsCard from './AboutUsCard';
import './aboutUs.css';
import image from '../home-header/beer-1513436_1920.jpg';
import testImage from './pexels-lluis-aragones-4536850.jpg';

const AboutUs = () => {
  const cards = [
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: image
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: testImage
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: image
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: image
    }
  ];

  return (
    <section className="about">
      <h2>About Us.</h2>
      <div className="about-us-content">
        {cards.map((card, index) => 
          <AboutUsCard key={index} text={card.text} image={card.image}/>
        )}
      </div>
    </section>
  )
}

export default AboutUs;