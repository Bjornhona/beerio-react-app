import React from 'react';
import AboutUsCard from './AboutUsCard';
import './aboutUsSection.css';
import image1 from './beer-839865_1920.jpg';
import image2 from './pexels-alex-knight-2599245.jpg';
import image3 from './pexels-rohan-jahagirdar-4620723.jpg';
import image4 from './brew-1031484_1920 (1).jpg';

const AboutUsSection = () => {
  const cards = [
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: image1
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: image2
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: image3
    },
    {
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: image4
    }
  ];

  return (
    <section className="about outer-content">
      <h2>About Us.</h2>
      <div className="about-us-content">
        {cards.map((card, index) => 
          <AboutUsCard key={index} text={card.text} image={card.image}/>
        )}
      </div>
    </section>
  )
}

export default AboutUsSection;