import React from 'react';
import './Dropdown.css';
import DropdownItem from '../dropdownItem/DropdownItem';
import { faSignInAlt, faUserPlus, faBeer, faHeart, faAddressCard, 
  faSignOutAlt, faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';
import { withAuth } from '../../../lib/authContext';

const Dropdown = (props) => {
  const { isLogged, logout, user, menuRight, handleClickItem } = props;

  return (
    menuRight ?
      isLogged ?
        <ul className="dropdown dropdownRight">
          <li className="hi-user"><h6>Hi, {user.username}</h6></li>
          <DropdownItem leftIcon={faSignOutAlt} link={"/login"} logout={logout} handleClickItem={handleClickItem}>Logout</DropdownItem>
        </ul>
      :
      <ul className="dropdown dropdownRight">
        <DropdownItem leftIcon={faSignInAlt} link={"/login"} handleClickItem={handleClickItem}>Login</DropdownItem>
        <DropdownItem leftIcon={faUserPlus} link={"/signup"} handleClickItem={handleClickItem}>Signup</DropdownItem>
      </ul> :
    <ul className="dropdown dropdownLeft">
      <DropdownItem leftIcon={faBeer} link={"/beers"} handleClickItem={handleClickItem}>Beers</DropdownItem>
      <DropdownItem leftIcon={faDatabase} link={"/breweries"} handleClickItem={handleClickItem}>Breweries</DropdownItem>
      <DropdownItem leftIcon={faFlask} link={"/styles"} handleClickItem={handleClickItem}>Styles</DropdownItem>
      <DropdownItem leftIcon={faHeart} link={"/favorites"} handleClickItem={handleClickItem}>Favorites</DropdownItem>
      <DropdownItem leftIcon={faAddressCard} link={"/about"} handleClickItem={handleClickItem}>About</DropdownItem>
    </ul>
  )
}

export default withAuth(Dropdown);