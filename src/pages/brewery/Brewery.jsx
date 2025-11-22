import React, {useState} from 'react';
import './brewery.css';
import { withAuth } from '../../lib/authContext';
import BackButton from '../../components/back-button/BackButton';
import HeaderSection from '../../components/header-section/HeaderSection';
import headerImage from './factory-1518504_1920.jpg';
import Map from '../../components/map/Map';
import AddressBar from '../../components/addressBar/AddressBar';

const Brewery = ({breweryState}) => {
  const [selectedBrewery, setSelectedBrewery] = useState();
 
  return (
    <>
      <HeaderSection 
        headline="Start your brewery adventure"
        breadText="Search among your favourite breweries to plan your next visit."
        image={headerImage}/>

      <div className="brewery-section outer-content">
        <div className="brewery-content">

          <div className="left-brewery-content">
            <h2>{breweryState.name}.</h2>
            {breweryState.established && <h4>Established in {breweryState.established}</h4>}
            {breweryState.website && <a href={breweryState.website}><h6>{breweryState.website}</h6></a>}
            <p>{breweryState.description}</p>
            {breweryState.mailingListUrl && <a href={breweryState.mailingListUrl}><h6>{breweryState.mailingListUrl}</h6></a>}
          </div>

          <div className="right-brewery-content">
            <div><img className="big-label-img" src={breweryState.images.squareLarge} alt="brewery brand"/></div>
          </div>

        </div>
      </div>

      {breweryState.locations &&
        <Map locations={breweryState.locations} setSelectedBrewery={setSelectedBrewery} />}

      {selectedBrewery &&
        <AddressBar breweryItem={selectedBrewery} email={breweryState.mailingListUrl} />}

      <BackButton/>
    </>
  )
}

export default withAuth(Brewery);