import React, { useState } from 'react';
import './Login.css';
import auth from '../../lib/auth-service';
import { Link, useHistory } from 'react-router-dom';
import { withAuth } from '../../lib/authContext';
import Button from '../../components/button/Button';

const Login = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    username: "",
    password: "",
    alert: ""
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password} = state;

    auth.login({ username, password })
    .then((user) => {
      props.setUser(user);
      history.push('/home'); 
    })
    .catch(error => {
      console.error('Error');
      const { data } = error.response;
      switch(data.error){
        case 'not-found':
          setState(prevState => ({ ...prevState, alert: '*Invalid username or password' }));
          break;
        case 'validation':
          setState(prevState => ({ ...prevState, alert: '*Username or password can´t be empty' }));
          break;
        default:
          setState(prevState => ({ ...prevState, alert: '' }));
      }   
    });
  }

  const handleChange = (event) => {  
    const {name, value} = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <div className="login-div">
      {/* <span className="login-background"></span> */}
      <span className="light-overlay"></span>
      <span className="login-box">
        <h1>Beerio</h1>
        <h6>Welcome back, log in to enter the world of beers!</h6>
        <div className="login-form">
          <input type="text" name="username" placeholder="Username" value={state.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
          <Button action={handleFormSubmit} text="Log in" shadow className="login-button"/>
          <div className={state.alert ? "alert" : "hiddenAlert"}><p>{state.alert}</p></div>
          <p className="login-footer">Don´t have an account yet? 
            <Link to={"/signup"} className="signup-text"> Sign up</Link>
          </p>
        </div>
      </span>
    </div>
  )
}

export default withAuth(Login);