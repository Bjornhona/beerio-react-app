import React, {useState, useEffect} from 'react';
import './breweries.css';
import { beerService } from '../../lib/beer-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import headerImage from './brew-1031484_1920.jpg';
import HeaderSection from '../../components/header-section/HeaderSection';
import BackButton from '../../components/back-button/BackButton';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';
import BreweriesItem from './components/breweries-item/BreweriesItem';

const Breweries = () => {
  const [breweriesData, setBreweriesData] = useState([]);
  // const [breweryData, setBreweryData] = useState([]);
  const [zipCode, setZipCode] = useState("");
  // const [locationsData, setLocationsData] = useState([]);
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
    .then(response => setBreweriesData(response))
    .catch(error => console.error(error));

    const getLocations = () => {
      return beerService.getLocations(zipCode)
    //  .then(data => setLocationsData(data))
    .then(data => {
      const breweriesResponse = data.map(d => d.brewery)
      const uniqueBreweriesResponse = Array.from(new Set(breweriesResponse.map(a => a.id)))
      .map(id => {
        return breweriesResponse.find(a => a.id === id)
      })
      const filteredBreweries = uniqueBreweriesResponse.filter(f => f.hasOwnProperty("images"))

      setBreweriesData(filteredBreweries)
    })
     .catch(error => console.error('Error: No Locations data received from API'));
   }

    if (inputValue !== '' || zipCode !== '') {
      inputValue !== '' && getSearchBrewery(inputValue);
      zipCode !== '' && getLocations(zipCode);
    } else {
      getBreweries();
    }

    return () => {ignore = true}
  }, [inputValue, zipCode]);

  const handleSearchInput = (event) => {
    setZipCode('');
    setInputValue(event.target.value);
  }

  // const fetchBreweryAddress = (event) => {
  //   const breweryId = event.target.value;

  //   return beerService.getBrewery(breweryId)
  //   .then(response => setBreweryData(response))
  //   .catch(error => console.error('Error: No Brewery data received from API'));
  // }

  // const getLocations = () => {
  //    return beerService.getLocations(zipCode)
  //   .then(data => setLocationsData(data.brewery))
  //   .catch(error => console.error('Error: No Locations data received from API'));
  // }

  const handleInputChange = (event) => {
    setInputValue('');
    // console.log('New search');
    setZipCode(event.target.value);
    // getLocations(event.target.value);
  }

console.log(breweriesData);
// console.log(locationsData && locationsData);

  return (
    <>
      {isLoading ? <LoadingScreen /> :
      <div className="breweries-screen">
        <HeaderSection 
          headline="Start your brewery adventure"
          breadText="Search amont your favourite breweries to plan your next visit."
          image={headerImage}/>

        <div className="breweries-div outer-content">
          <div className="beers-div-header">
            <h2>Find your brewery.</h2>
          </div>
          <div className="breweries-search">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input  type="text"
                    name="name" 
                    value={inputValue} 
                    onChange={handleSearchInput} 
                    placeholder="Search by name..." />
          </div>

          <div className="breweries-search">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input  type="text" 
                    value={zipCode} 
                    onChange={handleInputChange}
                    placeholder="Search by zip-code..." />
            {/* <button onClick={() => getLocations()}>Get Location</button> */}
            {/* {locationsData && locationsData.map(nearbyBrewery => {
              console.log(nearbyBrewery.brewery)
              return (
                <div key={nearbyBrewery.id}>
                <h4>{nearbyBrewery.brewery.name}, {nearbyBrewery.locality}</h4>
                  <p>{nearbyBrewery.latitude}</p>
                  <p>{nearbyBrewery.longitude}</p>
                </div>
              )
            })} */}
          </div>
        
          {/* <h2>Breweries</h2> */}
          {/* {breweriesData && breweriesData.length !== 0 &&
          <select id="breweries" name="Breweries" onChange={event => fetchBreweryAddress(event)}> 
            {breweriesData.map(brewery => 
                <option key={brewery.id} value={brewery.id}>
                  {brewery.name}
                </option>
            )}
          </select>} */}

          {/* <div className="beers-search">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input  type="text"
                    name="name" 
                    value={inputValue} 
                    onChange={handleSearchInput} 
                    placeholder="Search..." />
          </div> */}

          {/* {breweryData !== [] && breweryData.map(location => {
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
          })} */}

          {/* <div>
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
          </div> */}

          {breweriesData && breweriesData.length !== 0 ?
            <div className="beers-item-container">
              {breweriesData.map(item => 
                  <BreweriesItem
                    key={item.id}
                    // id={item.id}
                    breweryData={item}
                    // name={item.name}
                    // isOrganic={item.isOrganic}
                    // icon={item.images.squareMedium}
                    // style={style}
                  />
              )}
            </div> :
          <div className="no-response">
            <p>No beers matched your search.</p>
          </div>}
        
        </div>
      </div>}
      <BackButton/>
    </>
  )
}

export default Breweries;