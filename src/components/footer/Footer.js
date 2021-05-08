import React from "react";
import './footer.css';
import NavItem from '../navbar/nav-item/NavItem';
import {faFacebookF, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="header-logo-container">
        <a href="/home"><h1 className='nav-headline'>Beerio</h1></a>
      </div>

      <div className="social-media">
        <NavItem className='icon-left' icon={faFacebookF} />
        <NavItem className='icon-left' icon={faInstagram} />
        <NavItem className='icon-left' icon={faYoutube} />
        <NavItem className='icon-left' icon={faTwitter} />
      </div>

      <div className="footer-navbar-menu">
        <a href="/beers"><p>Explore</p></a>
        <a href="/favorites"><p>Favorites</p></a>
        <a href="/food-pairing"><p>Food pairing</p></a>
        <a href="/breweries"><p>Breweries</p></a>
        <a href="/play"><p>Play</p></a>
      </div>
    </div>
  )
}

export default Footer;