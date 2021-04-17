import React from 'react';
import { withAuth } from '../../lib/authContext';
import { useRouteMatch } from 'react-router-dom';
import './Beer.css';
import BeerItem from '../../components/beer-item/BeerItem';
import Navbar from '../../components/navbar/Navbar';

const Beer = () => {
  let match = useRouteMatch();
  const {id} = match.params;

  return (
    <>
      <Navbar/>
      <BeerItem id={id} />
    </>
  )
}

export default withAuth(Beer);