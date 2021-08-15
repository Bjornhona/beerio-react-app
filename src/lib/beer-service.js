import axios from 'axios';

class BeerService {
  constructor() {
    this.beer = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true
    })
  }

  getBeers() {
    return this.beer.get('/beers')
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  getSearch(type, query) {
    return this.beer.get(`/beers/search/${type}/${query}`)
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

  getBreweryById(breweryId) {
    return this.beer.get(`/beers/brewery/${breweryId}`)
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  getBrewery(breweryId) {
    return this.beer.get(`/beers/brewery/${breweryId}/locations`)
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  getLocations(zipCode) {
    return this.beer.get(`/beers/locations/${zipCode}`)
    .then(({data}) => data)
    .catch(error => console.error('Error'));
  }

  getStyles() {
    return this.beer.get('/beers/styles')
    .then(({data}) => data)
    .catch(error => console.error(error)); 
  }

  getGlass() {
    return this.beer.get('/beers/glassware')
    .then(({data}) => data)
    .catch(error => console.error(error)); 
  }

  getCategories() {
    return this.beer.get('/beers/categories')
    .then(data => data.data)
    .catch(error => console.error(error));
  }
}

export const beerService = new BeerService();
