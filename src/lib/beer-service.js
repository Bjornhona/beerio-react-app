import axios from 'axios';

class BeerService {
  constructor() {
    this.beer = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      // baseURL: 'http://localhost:5000',
      withCredentials: true
    })
  }

  getBeers() {
    return this.beer.get('/beers')
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  getFavorites() {
    return this.beer.get('/beers/favorites')
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  postFavorite(data) {
    return this.beer.put('/beers', data)
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  getBeer(id) {
    return this.beer.get(`/beers/${id}`)
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  getBreweries() {
    return this.beer.get('/beers/breweries')
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }
   
}

export const beerService = new BeerService();
