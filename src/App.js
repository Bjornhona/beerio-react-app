import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthContext from './lib/authContext';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Index from './pages/Index';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Beers from './pages/beers/Beers';
import Favorites from './pages/favorites/Favorites';
import NotFound from './pages/not-found/NotFound';
import Beer from './pages/beer/Beer';
import Play from './pages/play/Play';
import Breweries from './pages/breweries/Breweries';
import FoodPairing from './pages/food-pairing/FoodPairing';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Brewery from './pages/brewery/Brewery';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faPlayCircle, faSearch, faHeart, faStar, faUser, faBars, 
//   faBeer, faDatabase, faGlobeAmericas, faMapMarkedAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';
// import {faFacebookF} from '@fortawesome/free-brands-svg-icons';

// library.add(faPlayCircle, faSearch, faHeart, faStar, faUser, faBars, faBeer, 
//   faDatabase, faGlobeAmericas, faMapMarkedAlt, faUtensils, faFacebookF);

const App = () => {

  const defaultRoutes = () => {
    return (
      <div>
        <Navbar/>
        <div className="body-content">
          <Switch>
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute exact path="/beers" component={Beers} />
            <PrivateRoute path="/beers/:id" component={Beer} />
            <PrivateRoute exact path="/breweries" component={Breweries} />
            <PrivateRoute path="/breweries/:id" component={Brewery} />
            <PrivateRoute path="/food-pairing" component={FoodPairing} />
            <PrivateRoute path="/favorites" component={Favorites} />
            <PrivateRoute path="/play" component={Play} />
          </Switch>
        <Footer/>
        </div>
      </div>
    )
  }

  return (
    <AuthContext>
      <div className="app" data-testid="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <PublicRoute path="/signup" component={Signup} />
          <PublicRoute path="/login" component={Login} />
          <Route component={defaultRoutes}/>
          <Route component={NotFound} />
         </Switch>
      </div>
    </AuthContext>
  );
}

export default App;
