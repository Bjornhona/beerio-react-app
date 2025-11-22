import { React } from 'react';
import './addressBar.css';
import {faPhone, faGlobe, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import NavItem from '../navbar/nav-item/NavItem';

const AddressBar = ({breweryItem, email}) => {

  return (
    <div className="address-bar outer-content">
      <div className="left-address-field">
        <h4>{breweryItem.name}</h4>
        <p>{breweryItem.streetAddress}</p>
        <p>{breweryItem.locality}, {breweryItem.region}, {breweryItem.postalCode}</p>
        <p>{breweryItem.country && breweryItem.country.displayName}</p>
      </div>

      <div className="right-address-field">
        {breweryItem.phone &&
          <>
            <NavItem icon={faPhone}/>
            <p>{breweryItem.phone}</p>
          </>}
        {breweryItem.phone &&
          <>
            <div><NavItem icon={faGlobe}/></div>
            <p>{breweryItem.website}</p>
          </>}
        {email && 
          <>
            <div><NavItem icon={faEnvelope}/></div>
            <p>{email}</p>
          </>}
      </div>
    </div>
  )
}

export default AddressBar;