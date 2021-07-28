import React, {useState, useEffect} from 'react';
import { beerService } from '../../lib/beer-service';

const Breweries = () => {
  const [breweriesData, setBreweriesData] = useState([]);
  const [breweryData, setBreweryData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [locationsData, setLocationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getBreweries = () => beerService.getBreweries()
    .then(brewery => {if (!ignore) {
      setBreweriesData(brewery);
    }})
    .then(() => setIsLoading(false))
    .catch(error => console.error('Error: No data received from API'));

    getBreweries();

    return () => {ignore = true}
  }, []);

  const fetchBreweryAddress = (event) => {
    const breweryId = event.target.value;

    return beerService.getBrewery(breweryId)
    .then(response => setBreweryData(response))
    .catch(error => console.error('Error: No Brewery data received from API'));
  }

  const getLocations = () => {
     return beerService.getLocations(zipCode)
    .then(data => setLocationsData(data))
    .catch(error => console.error('Error: No data received from API'));
  }

  const handleInputChange = (event) => setZipCode(event.target.value);

// console.log(breweriesData);

  return (
    <>
      {isLoading ? <p>Loading...</p> :
      <div>
        <h2>Breweries</h2>

        <select id="breweries" name="Breweries" onChange={event => fetchBreweryAddress(event)}> 
          {breweriesData.map(brewery => 
              <option key={brewery.id} value={brewery.id}>
                {brewery.name}
              </option>
          )}
        </select>

      {breweryData !== [] && breweryData.map(location => {
        let breweryInformation = {};

        breweriesData.forEach(brewery => {
          const breweryInfo = brewery.locations ? brewery.locations.filter(loc => loc.id === location.id) : []
          
          if (breweryInfo.length > 0) {
            breweryInformation = brewery
          }
        })
        console.log(breweryInformation)

        return (
          <div key={location.id}>
            <h4>{breweryInformation.name}</h4>
            <p>{location.latitude}</p>
            <p>{location.longitude}</p>
          </div>
        )
      })}

      <div>
        <h2>Get nearest Breweries based on your zip-code</h2>
        <input type="text" placeholder="Enter your zip-code" value={zipCode} onChange={handleInputChange}/>
        <button onClick={() => getLocations()}>Get Location</button>
        {locationsData && locationsData.map(nearbyBrewery => {
          // console.log(nearbyBrewery)
          return (
            <div key={nearbyBrewery.id}>
            <h4>{nearbyBrewery.brewery.name}, {nearbyBrewery.locality}</h4>
              <p>{nearbyBrewery.latitude}</p>
              <p>{nearbyBrewery.longitude}</p>
            </div>
          )
        })}
      </div>
      </div>}
    </>
  )
}

export default Breweries;