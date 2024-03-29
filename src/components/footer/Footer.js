import React from "react";
import './footer.css';
import NavItem from '../navbar/nav-item/NavItem';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="header-logo-container">
        <Link to="/home"><h1 className='nav-headline'>Beerio</h1></Link>
      </div>

      <div className="social-media">
        <NavItem className='icon-left' icon={["fab", "facebook"]} />
        <NavItem className='icon-left' icon={["fab", "instagram"]} />
        <NavItem className='icon-left' icon={["fab", "youtube"]} />
        <NavItem className='icon-left' icon={["fab", "twitter"]} />
      </div>

      <div className="footer-navbar-menu">
        <Link to="/beers"><p>Beers</p></Link>
        <Link to="/breweries"><p>Breweries</p></Link>
        <Link to="/styles"><p>Styles</p></Link>
        <Link to="/favorites"><p>Favorites</p></Link>
        <Link to="/about"><p>About</p></Link>
      </div>
    </div>
  )
}

export default Footer;