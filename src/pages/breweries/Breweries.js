import React, {useState, useEffect} from 'react';
import { beerService } from '../../lib/beer-service';
import Navbar from '../../components/navbar/Navbar';

const Breweries = () => {
  const [breweriesData, setBreweriesData] = useState([]);
  const [breweryData, setBreweryData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [locationsData, setLocationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getBreweries = async () => await beerService.getBreweries()
    .then(brewery => {if (!ignore) {
      setBreweriesData(brewery);
    }})
    .then(() => setIsLoading(false))
    .catch(error => console.error('Error: No data received from API'));

    getBreweries();

    return () => {ignore = true}
  }, []);

  const fetchBreweryAddress = (breweryId) => {
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

  return (
    <>
      <Navbar/>
      {isLoading ? <p>Loading...</p> :
      <div>
        <h2>Breweries</h2>
        {breweriesData.map(brewery => {
          return (
            <p key={brewery.id} onClick={() => fetchBreweryAddress(brewery.id)}>{brewery.name}</p>
          )
        })}
      {breweryData !== [] && breweryData.map(location => {
        return (
          <div key={location.id}>
            <h4>{location.name}</h4>
            <p>{location.latitude}</p>
            <p>{location.longitude}</p>
          </div>
        )
      })}
      <div>
        <h2>Get nearest Breweries based on your zip-code</h2>
        <input type="text" placeholder="Enter your zip-code" value={zipCode} onChange={handleInputChange}/>
        <button onClick={() => getLocations()}>Get Location</button>
        {locationsData.map(nearbyBrewery => {
          return (
            <div key={nearbyBrewery.id}>
            <h4>{nearbyBrewery.name}, {nearbyBrewery.locality}</h4>
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