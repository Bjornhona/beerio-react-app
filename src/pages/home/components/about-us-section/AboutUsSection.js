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
      text: "The best beers in the world offer exceptional flavors, balance, and craftsmanship, representing diverse traditions and innovative brewing techniques. Cheers!",
      image: image1
    },
    {
      text: "Beer styles encompass diverse flavors, aromas, and brewing techniques, ranging from hoppy IPAs to rich stouts, each with unique characteristics.",
      image: image2
    },
    {
      text: "The best beer flavors encompass a spectrum of sensations: from crisp and refreshing to rich and complex, satisfying every taste bud.",
      image: image3
    },
    {
      text: "The best breweries in the world craft exceptional brews, blending tradition with innovation, and embodying a commitment to quality and excellence.",
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