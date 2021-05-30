import React, { useState, useEffect } from 'react';
import { withAuth } from '../../lib/authContext';
import BeersItem from '../../components/beers-item/BeersItem';
import { beerService } from '../../lib/beer-service';
import './Beers.css';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';
import HeaderSection from '../../components/header-section/HeaderSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import headerImage from './oak-4891183_1920.jpg';

const Beers = () => {
  const [inputValue, setInputValue] = useState('');
  const [beersData, setBeersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let ignore = false;

    const getBeers = () => beerService.getBeers()
    .then(response => {if (!ignore) {
      setBeersData(response);
      setIsLoading(false);
    }})
    .catch(error => console.error(error));

    const getSearch = (query) => beerService.getSearch(query)
    .then(response => setBeersData(response))
    .catch(error => console.error(error));

    inputValue !== '' ? getSearch(inputValue) : getBeers();

    return () => {ignore = true}
  }, [inputValue]);

  const handleSearchInput = (event) => setInputValue(event.target.value);

  return (
    <div className="beers-screen">
      <HeaderSection 
        headline="Explore the world of beers"
        breadText="Start the adventure of searching, saving and learning about more than 3000 beers."
        image={headerImage}/>
      <div className="beers-div outer-content">
        <div className="beers-div-header">
          <h2>Find your beers.</h2>
          <div className="beers-search">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input  type="text"
                    name="name" 
                    value={inputValue} 
                    onChange={handleSearchInput} 
                    placeholder="Search..." />
          </div>
        </div>
        {isLoading ? <LoadingScreen /> : 
          beersData && beersData.length !== 0 ? 
            <div className="beers-item-container">
              {beersData.map(item => {    
                const style = item.style && item.style.category.name;
                item.isOrganic = 'Y' ? "Yes" : "No";
                return (
                  <BeersItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isOrganic={item.isOrganic}
                    icon={item.labels.medium}
                    style={style}
                  />
                )
              })}
            </div> :
          <div className="no-response">
            <p>No beers matched your search.</p>
          </div>
        }
      </div>
    </div>
  )
}

export default withAuth(Beers);