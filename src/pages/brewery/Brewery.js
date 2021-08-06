import React from 'react';
import BackButton from '../../components/back-button/BackButton';

const Brewery = ({breweryState}) => {
 
  console.log(breweryState.locations && breweryState.locations);

  return (
    <>
      <div>
        <p>{breweryState.name}</p>
        {breweryState.established && <p>Established in {breweryState.established}</p>}
        <p>{breweryState.website}</p>
        <p>{breweryState.description}</p>
        <p>{breweryState.mailingListUrl}</p>
        <div>
          <img src={breweryState.images.squareMedium} alt="brewery brand" />
        </div>
      </div>
      <div>
        {breweryState.locations && breweryState.locations.map(location => {
          return (
            <div key={location.id}>
              <p>{location.latitude}</p>
              <p>{location.longitude}</p>
            </div>
            )
        })}
      </div>
      <BackButton/>
    </>
  )
}

export default Brewery;