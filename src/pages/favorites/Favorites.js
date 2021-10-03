import React, { useState, useEffect } from 'react';
import { withAuth } from '../../lib/authContext';
import { beerService } from '../../lib/beer-service';
import BeersItem from '../../components/beers-item/BeersItem';
import './Favorites.css';
import BackButton from '../../components/back-button/BackButton';
import HeaderSection from '../../components/header-section/HeaderSection';
import headerImage from './beer-4145976_1920.jpg';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let ignore = false;

    const fetchFavorites = () => beerService.getFavorites()
    .then(result => {!ignore && 
      setFiltered(result);
      setFavorites(result);
    })
    .then(() => setIsLoading(false))
    .catch(error => console.error('Error'));
    
    fetchFavorites();

    return () => {ignore = true};
  }, []);

  const handleSearchInput = (event) => {
    const input = event.target.value;    
    const filtered = favorites.filter(favorite => favorite.name.toLowerCase().includes(input.toLowerCase()));
    
    setInputValue(input);
    setFiltered(filtered);
  }

  return (
    <div className="section">
      <HeaderSection 
        headline="My Favorite Beers"
        breadText="All your favourite beers saved for future enjoyable moments."
        image={headerImage}/>
      <div className="beers-div outer-content">
        <div className="beers-div-header">
          <h2>Find your favorites.</h2>
          <div className="beers-search">
            <FontAwesomeIcon className="search-icon" icon="search"/>
            <input  type="text"
                    name="name" 
                    value={inputValue} 
                    onChange={handleSearchInput} 
                    placeholder="Search..." />
          </div>
        </div>
      {isLoading ? 
        <LoadingScreen /> : 
        ((favorites && favorites.length < 1) || (filtered && filtered.length < 1)) ? 
          <div className="no-response">
            <p>You have not selected any favorites yet or no favorites matched your search.</p>
          </div> : 
          <div className="beers-item-container"> 
            {filtered && filtered.map(item => {
                const {id, name, isOrganic, icon, style} = item;
                return (
                  <BeersItem 
                    key={id}
                    id={id}
                    name={name}
                    isOrganic={isOrganic}
                    icon={icon}
                    style={style}
                  />
                )
            })}
          </div>
      }
      </div>
      <BackButton/>
    </div>
  )
}

export default withAuth(Favorites);