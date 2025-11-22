import React from 'react';
import {Navigate} from 'react-router-dom';
import { withAuth } from '../lib/authContext';

const PrivateRoute = (props) => {
  const {isLogged} = props;

  return (
      isLogged ? props.children : <Navigate to={'/login'} />
  );
}

export default withAuth(PrivateRoute);