import React, {useState, useEffect} from 'react';
import './breweries.css';
import { beerService } from '../../lib/beer-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import headerImage from './brew-1031484_1920.jpg';
import HeaderSection from '../../components/header-section/HeaderSection';
import BackButton from '../../components/back-button/BackButton';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';
import BreweriesItem from './components/breweries-item/BreweriesItemContainer';

const Breweries = () => {
  const [breweriesData, setBreweriesData] = useState([]);
  const [zipCode, setZipCode] = useState("");
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

  const handleInputChange = (event) => {
    setInputValue('');
    setZipCode(event.target.value);
  }

  return (
    <>
      {isLoading ? <LoadingScreen /> :
      <div className="breweries-screen">
        <HeaderSection 
          headline="Start your brewery adventure"
          breadText="Search among your favourite breweries to plan your next visit."
          image={headerImage}/>

        <div className="breweries-div outer-content">
          <div className="beers-div-header">
            <h2>Find your brewery.</h2>
          </div>

          <div className="breweries-searchboxes">
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
            </div>
          </div>

          {breweriesData && breweriesData.length !== 0 ?
            <div className="beers-item-container">
              {breweriesData.map(item => 
                  <BreweriesItem
                    key={item.id}
                    breweryData={item}
                  />
              )}
            </div> :
          <div className="no-response">
            <p>No breweries matched your search.</p>
          </div>}
        
        </div>
      </div>}
      <BackButton/>
    </>
  )
}

export default Breweries;