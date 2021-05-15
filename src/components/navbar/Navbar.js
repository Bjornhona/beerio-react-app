import React, {useRef, useEffect, useState} from 'react';
import './Navbar.css';
import NavItem from './nav-item/NavItem';
import Dropdown from './dropdown/Dropdown';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const node = useRef();
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (node.current.contains(event.target)) {
      return;
    }
    setOpenLeft(false);
    setOpenRight(false);
  };

  const handleClickItem = () => {
    setOpenRight(false);
    setOpenLeft(false);
  }

  const handleOpen = (side) => {
    if (side === "left") {
      setOpenLeft(!openLeft);
      setOpenRight(false);
    } else {
      setOpenRight(!openRight);
      setOpenLeft(false);
    }
  }

  return (
    <nav className='navbar' ref={node}>
      <ul className='navbar-nav'>
        <span className="left-nav-item">
          <NavItem className="left-navbar-item" icon={faBars} isOpen={openLeft} handleOpen={() => handleOpen("left")}>
            <Dropdown menuLeft handleClickItem={handleClickItem} />
          </NavItem>
        </span>

        <div className="header-logo-container">
          <a href="/home"><h1 className='nav-headline'>Beerio</h1></a>
        </div>

        <div className="navbar-menu">
          <a href="/beers"><p>Explore</p></a>
          <a href="/favorites"><p>Favorites</p></a>
          <a href="/food-pairing"><p>Food pairing</p></a>
          <a href="/breweries"><p>Breweries</p></a>
          <a href="/play"><p>Play</p></a>
        </div>

        <NavItem icon={faUser} isOpen={openRight} handleOpen={() => handleOpen("right")}>
          <Dropdown menuRight handleClickItem={handleClickItem} />
        </NavItem>
      </ul>
    </nav>
  )
}

export default Navbar;