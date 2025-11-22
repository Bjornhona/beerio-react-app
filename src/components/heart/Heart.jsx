import React, { useState, useEffect } from 'react';
import { beerService } from '../../lib/beer-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Heart.css';

const Heart = (props) => {
  const {id, name, isOrganic, icon, style} = props;
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
    <div className="heart-icon">
      <span className={isFavorite ? "heart red-heart" : "heart"}>
        <FontAwesomeIcon icon={isFavorite ? "heart" : ["far", "heart"]} onClick={handleFavorites}/>
      </span>
    </div>
  )
}

export default Heart;