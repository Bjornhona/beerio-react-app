import React, { useState, useEffect } from 'react';
import { withAuth } from '../../lib/authContext';
import BeersItem from '../../components/beers-item/BeersItem';
import { beerService } from '../../lib/beer-service';
import './Beers.css';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const Beers = () => {
  const [inputValue, setInputValue] = useState('');
  const [beersData, setBeersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let ignore = false;

    const getBeers = async () => await beerService.getBeers()
    .then(response => {if (!ignore) {
      setBeersData(response);
      setIsLoading(false);
    }})
    .catch(error => console.error('Error'));
    getBeers();

    return () => {ignore = true}
  }, []);

  const newData = beersData.filter((item) => {
    let dataName = item.name.toUpperCase();
    return dataName.includes(inputValue.toUpperCase());
  });

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
    // setBeersData(beersData.filter(item => {
    //   let dataName = item.name.toUpperCase();
    //   return dataName.includes(inputValue.toUpperCase());
    // }));
  }

  // console.log(beersData);
  // console.log(newData);

  return (
    <div className="beers-screen">
      <div className="beers-div outer-content">
        <div className="beers-div-header">
          <h2>Find your beers.</h2>
          <div className="beers-search">
            <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            <input type="text" name="name" value={inputValue} onChange={handleSearchInput} placeholder="Search..." />
          </div>
        </div>
        {isLoading ? <LoadingScreen /> : 
          newData !== [] ? 
            <div className="beers-item-container">{newData.map(item => {      
              const style = item.style && item.style.category.name;
              item.isOrganic = 'Y' ? "Yes" : "No";
              return (
                <BeersItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  isOrganic={item.isOrganic}
                  icon={item.labels.icon}
                  style={style}
                />
              )
            })}</div> : 
          <div className="no-response">
            <p>No beers correspond to your search.</p>
          </div>
        }
      </div>
    </div>
  )
}

export default withAuth(Beers);