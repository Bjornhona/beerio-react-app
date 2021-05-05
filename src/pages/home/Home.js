import React from 'react';
import { withAuth } from '../../lib/authContext';
import './Home.css';
import HeaderSection from './components/header-section/HeaderSection';
import AboutUsSection from './components/about-us-section/AboutUsSection';
import Sponsors from './components/sponsors/Sponsors';
import Navbar from './../../components/navbar/Navbar';
import BeersSection from './components/beers-section/BeersSection';
import BreweriesSection from './components/breweries-section/BreweriesSection';
import FoodPairingSection from './components/food-pairing-section/FoodPairingSection';

const Home = () => {

  return (
    <>
      <Navbar/>
      <HeaderSection/>
      <AboutUsSection/>
      <BeersSection/>
      <BreweriesSection/>
      <FoodPairingSection/>
      <Sponsors/>
      {/* <footer></footer> */}
    </>
  )
}

export default withAuth(Home);
