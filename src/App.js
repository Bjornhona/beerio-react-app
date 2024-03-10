import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import About from './pages/about/About';
import Breweries from './pages/breweries/Breweries';
import Styles from './pages/styles/Styles';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Brewery from './pages/brewery/BreweryContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHeart, faUser, faBars, faSignInAlt, faUserPlus, faAddressCard, faSignOutAlt, faDatabase, faFlask,
  faBeer, faSkull, faGlobeAmericas, faMapMarkedAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {faHeart as outlinedHeart} from '@fortawesome/free-regular-svg-icons';
import {faFacebook, faInstagram, faYoutube, faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add( faSearch, faHeart, outlinedHeart, faUser, faBars, faBeer, faSkull, faFlask, faChevronLeft,
  faDatabase, faGlobeAmericas, faMapMarkedAlt, faFacebook, faInstagram, faYoutube, faTwitter, faSignInAlt, faUserPlus, faAddressCard, faSignOutAlt,);

const App = () => {

  const DefaultRoutes = () => {
    return (
      <div>
        <Navbar/>
        <div className="body-content">
          <Routes>
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/beers" element={<PrivateRoute><Beers /></PrivateRoute>} />
            <Route path="/beers/:id" element={<PrivateRoute><Beer /></PrivateRoute>} />
            <Route path="/breweries" element={<PrivateRoute><Breweries /></PrivateRoute>} />
            <Route path="/breweries/:id" element={<PrivateRoute><Brewery /></PrivateRoute>} />
            <Route path="/styles" element={<PrivateRoute><Styles /></PrivateRoute>} />
            <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    )
  }

  return (
    <AuthContext>
      <div className="app" data-testid="app">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/*" element={<DefaultRoutes />} />
         </Routes>
      </div>
    </AuthContext>
  );
}

export default App;
