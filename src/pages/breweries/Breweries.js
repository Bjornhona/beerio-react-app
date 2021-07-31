import React, {useState, useEffect} from 'react';
import { beerService } from '../../lib/beer-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Breweries = () => {
  const [breweriesData, setBreweriesData] = useState([]);
  const [breweryData, setBreweryData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  const [locationsData, setLocationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let ignore = false;

    const getBreweries = () => beerService.getBreweries()
    .then(brewery => {if (!ignore) {
      setBreweriesData(brewery);
    }})
    .then(() => setIsLoading(false))
    .catch(error => console.error('Error: No data received from API'));


    const getSearchBrewery = (query) => beerService.getSearch("brewery", query)
    .then(response => {
      console.log(response)
      return setBreweriesData(response)
    })
    .catch(error => console.error(error));

    inputValue !== '' ? getSearchBrewery(inputValue) : getBreweries();


    // getBreweries();

    return () => {ignore = true}
  }, [inputValue]);

  const handleSearchInput = (event) => setInputValue(event.target.value);


  // const [inputValue, setInputValue] = useState('');
  // const [beersData, setBeersData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  
  // useEffect(() => {
  //   let ignore = false;

    // const getBeers = () => beerService.getBeers()
    // .then(response => {if (!ignore) {
    //   setBeersData(response);
    //   setIsLoading(false);
    // }})
    // .catch(error => console.error(error));

  //   const getSearch = (query) => beerService.getSearch("beer", query)
  //   .then(response => setBeersData(response))
  //   .catch(error => console.error(error));

  //   inputValue !== '' ? getSearch(inputValue) : getBeers();

  //   return () => {ignore = true}
  // }, [inputValue]);

  // const handleSearchInput = (event) => setInputValue(event.target.value);


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

console.log(breweriesData);

  return (
    <>
      {isLoading ? <p>Loading...</p> :
      <div>
        <h2>Breweries</h2>
        {breweriesData && breweriesData.length !== 0 &&
        <select id="breweries" name="Breweries" onChange={event => fetchBreweryAddress(event)}> 
          {breweriesData.map(brewery => 
              <option key={brewery.id} value={brewery.id}>
                {brewery.name}
              </option>
          )}
        </select>}

        <div className="beers-search">
          <FontAwesomeIcon className="search-icon" icon={faSearch}/>
          <input  type="text"
                  name="name" 
                  value={inputValue} 
                  onChange={handleSearchInput} 
                  placeholder="Search..." />
        </div>

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