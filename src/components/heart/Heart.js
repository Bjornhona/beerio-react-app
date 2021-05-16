import React, { useState, useEffect } from 'react';
import { beerService } from '../../lib/beer-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as outlinedHeart} from '@fortawesome/free-regular-svg-icons';
import './Heart.css';

const Heart = ({id, name, isOrganic, icon, style}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    let ignore = false;

    const getFavorite = async () => 
      await beerService.getFavorites()
        .then(result => {
          if (!ignore) {
            const newFavorite = result.find(item => (item.id === id));
            if (newFavorite) {setIsFavorite(true)}
          }
        })
        .catch(error => {
          console.error('Error');
      });
      getFavorite();

      return () => {ignore = true};
  }, [id]);

  const handleFavorites = async (e) => {
    e.preventDefault();

    await beerService.postFavorite({
      id: id,
      name: name,
      isOrganic: isOrganic,
      icon: icon,
      style: style
    })
    .then(() => setIsFavorite(!isFavorite))
    .catch(error => console.error('Error'))
  }
  
  return (
    <div>
      <span className={isFavorite ? "heart red-heart" : "heart"}>
        <FontAwesomeIcon icon={isFavorite ? faHeart : outlinedHeart} onClick={handleFavorites}/>
      </span>
    </div>
  )
}

export default Heart;