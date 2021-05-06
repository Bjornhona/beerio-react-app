import React from 'react';
import { withAuth } from '../../lib/authContext';
import './Home.css';
import HeaderSection from './components/header-section/HeaderSection';
import AboutUsSection from './components/about-us-section/AboutUsSection';
import Sponsors from './components/sponsors/Sponsors';
import BeersSection from './components/beers-section/BeersSection';
import BreweriesSection from './components/breweries-section/BreweriesSection';
import FoodPairingSection from './components/food-pairing-section/FoodPairingSection';

const Home = () => {

  return (
    <>
      <HeaderSection/>
      <AboutUsSection/>
      <BeersSection/>
      <BreweriesSection/>
      <FoodPairingSection/>
      <Sponsors/>
    </>
  )
}

export default withAuth(Home);
