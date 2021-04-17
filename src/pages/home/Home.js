import React from 'react';
import { withAuth } from '../../lib/authContext';
import './Home.css';
import HomeHeader from './components/home-header/HomeHeader';
import AboutUs from './components/about-us/AboutUs';
import Sponsors from './components/sponsors/Sponsors';
import Navbar from './../../components/navbar/Navbar';

const Home = () => {

  return (
    <>
      <Navbar/>
      <div className="home-div">
        <HomeHeader/>
        <AboutUs/>

        <Sponsors/>

        {/* <section className="beers">
          <h2>Find the best beers in the world</h2>
        </section>
        <section className="breweries">
          <h2>Visit breweries in your area</h2>
        </section>
        <section className="food-pairing">
          <h2>Excellent beer and food pairing</h2>
        </section>
        <footer></footer> */}
      </div>
    </>
  )
}

export default withAuth(Home);

{/* <div className="home-menu">
  <span className="home-box">
    <h1>Beerio</h1>
    <h5>Welcome to the world of beers!</h5>
  </span>
</div> */}

{/* <HomeItem 
link='/beers' 
headerText='Explore' 
description='Read about the best beers' 
iconName='search' 
iconClass='fontawesome' />
<HomeItem 
link='/favorites' 
headerText='Favourites' 
description='Remember the beers you love' 
iconName='heart' 
iconClass='fontawesome' />
<HomeItem 
link='/recommended' 
headerText='Recommended' 
description='The most wanted beers' 
iconName='thumbs-up' 
iconClass='fontawesome' />
<HomeItem 
link='/breweries' 
headerText='Breweries' 
description='Learn from the best breweries' 
iconName='beer' 
iconClass='fontawesome' />
<HomeItem 
link='/play' 
headerText='Play' 
description='Your beer personality' 
iconName='play-circle' 
iconClass='fontawesome' /> */}