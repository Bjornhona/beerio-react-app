import React from "react";
import './footer.css';
import NavItem from '../navbar/nav-item/NavItem';
import {faFacebookF, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="header-logo-container">
        <Link to="/home"><h1 className='nav-headline'>Beerio</h1></Link>
      </div>

      <div className="social-media">
        <NavItem className='icon-left' icon={faFacebookF} />
        <NavItem className='icon-left' icon={faInstagram} />
        <NavItem className='icon-left' icon={faYoutube} />
        <NavItem className='icon-left' icon={faTwitter} />
      </div>

      <div className="footer-navbar-menu">
        <Link to="/beers"><p>Beers</p></Link>
        <Link to="/breweries"><p>Breweries</p></Link>
        <Link to="/food-pairing"><p>Food pairing</p></Link>
        <Link to="/favorites"><p>Favorites</p></Link>
        <Link to="/play"><p>Play</p></Link>
      </div>
    </div>
  )
}

export default Footer;