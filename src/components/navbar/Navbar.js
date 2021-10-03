import React, {useRef, useEffect, useState} from 'react';
import './Navbar.css';
import NavItem from './nav-item/NavItem';
import Dropdown from './dropdown/Dropdown';
import {Link} from 'react-router-dom';

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
          <NavItem icon="bars" isOpen={openLeft} handleOpen={() => handleOpen("left")}>
            <Dropdown menuLeft handleClickItem={handleClickItem} />
          </NavItem>
        </span>

        <div className="header-logo-container">
          <Link to="/home"><h1 className='nav-headline'>Beerio</h1></Link>
        </div>

        <div className="navbar-menu">
          <Link to="/beers"><p>Beers</p></Link>
          <Link to="/breweries"><p>Breweries</p></Link>
          <Link to="/styles"><p>Styles</p></Link>
          <Link to="/favorites"><p>Favorites</p></Link>
          <Link to="/about"><p>About</p></Link>
        </div>

        <NavItem icon="user" isOpen={openRight} handleOpen={() => handleOpen("right")}>
          <Dropdown menuRight handleClickItem={handleClickItem} />
        </NavItem>
      </ul>
    </nav>
  )
}

export default Navbar;