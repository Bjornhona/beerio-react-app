import React, { useState, useEffect } from 'react'
import authService from './auth-service';
import LoadingScreen from '../components/loading-screen/LoadingScreen';

const Auth = React.createContext();

export const withAuth = (Comp) => {
  return (props) => {
    return <Auth.Consumer>
      {value => {
        return <Comp {...value} {...props} />
      }}
    </Auth.Consumer>
  }
}

const AuthContext = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let ignore = false;

    const getAuthService = async () => {
      try {
        const user = await authService.me();
        // User found as "user"
        if (!ignore) {
          setUser(user);
          setIsLogged(true);
          setIsLoading(false);
        }
      }
      catch (error) {
        // User not found and set to null
        setIsLogged(false);
        setUser(null);
        setIsLoading(false);
      };
    };
    getAuthService();

    return () => ignore = true;
  }, []);

  const handleSetUser = (user) => {
    setUser(user);
    setIsLogged(true);
  };

  const handleLogOut = async () => {
    await authService.logout()
    .then(() => {
      setIsLogged(false);
      setUser(null);
    })
    .catch((error) => {
      console.error('Error');
    })
  }

  return (
    isLoading ? <LoadingScreen /> : 
    <Auth.Provider value={{
      isLogged: isLogged,
      user: user,
      logout: handleLogOut,
      setUser: handleSetUser
    }}>
      {props.children}
    </Auth.Provider>
  );
}

export default AuthContext;