import React, {useRef, useEffect, useState} from 'react';
import './Navbar.css';
import NavItem from './nav-item/NavItem';
import Dropdown from './dropdown/Dropdown';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  return (
    <nav className='navbar' ref={node}>
      <ul className='navbar-nav'>
        <NavItem icon={faBars} isOpen={openLeft} handleOpen={() => setOpenLeft(!openLeft)}>
          <Dropdown menuLeft handleClickItem={handleClickItem} />
        </NavItem>
        <div className="header-logo-container">
          <img src={process.env.PUBLIC_URL + '/Beerio-192.png'} alt="beer logo" className="logo-image" />
          <h3 className='nav-headline'>Beerio</h3>
        </div>
        <NavItem icon={faUser} isOpen={openRight} handleOpen={() => setOpenRight(!openRight)}>
          <Dropdown menuRight handleClickItem={handleClickItem} />
        </NavItem>
      </ul>
    </nav>
  )
}

export default Navbar;