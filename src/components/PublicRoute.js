import React from 'react';
import {Navigate} from 'react-router-dom';
import { withAuth } from '../lib/authContext';

const PublicRoute = (props) => {
  const {isLogged} = props;

  return (
    isLogged ? <Navigate to={'/home'} /> : props.children
  );
}

export default withAuth(PublicRoute);

// isLogged ? <Navigate to={'/home'} /> : <Route {...props}>{props.children}</Route>
