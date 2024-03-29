import React from 'react';
import { withAuth } from '../../lib/authContext';
import './Home.css';
import HeaderSection from '../../components/header-section/HeaderSection';
import AboutUsSection from './components/about-us-section/AboutUsSection';
import Sponsors from './components/sponsors/Sponsors';
import BeersSection from './components/beers-section/BeersSection';
import BreweriesSection from './components/breweries-section/BreweriesSection';
import StylesSection from './components/styles-section/StylesSection';
import headerImage from './pexels-pixabay-159291.jpg';

const Home = () => {

  return (
    <>
      <HeaderSection 
        headline="Explore the world of beers"
        breadText="Start the adventure of searching, saving and learning about more than 3000 beers."
        image={headerImage}
        />
      <AboutUsSection/>
      <BeersSection/>
      <BreweriesSection/>
      <StylesSection/>
      <Sponsors/>
    </>
  )
}

export default withAuth(Home);
