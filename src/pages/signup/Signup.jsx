import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import auth from '../../lib/auth-service';
import { withAuth } from '../../lib/authContext';
import Button from '../../components/button/Button';

const Signup = (props) => {

  const [state, setState] = useState({
    username: "",
    password: "",
    alert: ""
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password} = state;

    auth.signup({ username, password })
      .then((user) => {
        setState(prevState => ({ ...prevState, username: '', password: '' }));
        props.setUser(user);
        props.history.push('/home');
      })
      .catch( error => {
        const { data } = error.response;
        switch(data.error){
          case 'empty':
            setState(prevState => ({ ...prevState, alert: '*Username or password can´t be empty' }));
            break;
          case 'username-not-unique':
            setState(prevState => ({ ...prevState, alert: '*User already exists' }));
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

  const { username, password, alert } = state;

  return (
    <div className="signup-div">
      <span className="signup-box">
          <h1>Beerio</h1>
          <h6>Become a part of this world of beers and sign up today!</h6>
          <div className="signup-form">
            <div className="inputs">
              <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
            </div>
            <Button action={handleFormSubmit} text="Sign up" shadow/>
            <div className={alert ? "alert" : "hiddenAlert"}><h5>{state.alert}</h5></div>
            <p className="signup-footer">Already have an account?  
              <Link to={"/login"} className="login-text"> Log in</Link>
            </p>
        </div>
      </span>
    </div>
  );
}

export default withAuth(Signup);