import React from 'react';
import './Dropdown.css';
import DropdownItem from '../dropdownItem/DropdownItem';
import { withAuth } from '../../../lib/authContext';

const Dropdown = (props) => {
  const { isLogged, logout, user, menuRight, handleClickItem } = props;

  return (
    menuRight ?
      isLogged ?
        <ul className="dropdown dropdownRight">
          <li className="hi-user"><h6>Hi, {user.username}</h6></li>
          <DropdownItem leftIcon="sign-out-alt" link={"/login"} logout={logout} handleClickItem={handleClickItem}>Logout</DropdownItem>
        </ul>
      :
      <ul className="dropdown dropdownRight">
        <DropdownItem leftIcon="sign-in-alt" link={"/login"} handleClickItem={handleClickItem}>Login</DropdownItem>
        <DropdownItem leftIcon="user-plus" link={"/signup"} handleClickItem={handleClickItem}>Signup</DropdownItem>
      </ul> :
    <ul className="dropdown dropdownLeft">
      <DropdownItem leftIcon="beer" link={"/beers"} handleClickItem={handleClickItem}>Beers</DropdownItem>
      <DropdownItem leftIcon="database" link={"/breweries"} handleClickItem={handleClickItem}>Breweries</DropdownItem>
      <DropdownItem leftIcon="flask" link={"/styles"} handleClickItem={handleClickItem}>Styles</DropdownItem>
      <DropdownItem leftIcon="heart" link={"/favorites"} handleClickItem={handleClickItem}>Favorites</DropdownItem>
      <DropdownItem leftIcon="address-card" link={"/about"} handleClickItem={handleClickItem}>About</DropdownItem>
    </ul>
  )
}

export default withAuth(Dropdown);