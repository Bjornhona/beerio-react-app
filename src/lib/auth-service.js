import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "https://beerio-aa491.web.app/",
        "Access-Control-Allow-Credentials": true,
      }
    })
  }

  // headers: {
  //   "Access-Control-Allow-Origin": "https://beerio-aa491.web.app/",
  //   "Access-Control-Allow-Credentials": true,
  // }
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Origin": "https://beerio-api-eu.herokuapp.com/",
      // 'X-Requested-With': 'XMLHttpRequest',
      // "Content-Type": "application/x-www-form-urlencoded"
      // "Content-Type": "application/json"
      // "origin": {
      //   "scheme": auth,
      //   "host": "",
      //   "port": ""        
      // }
            // proxy: {
      //   protocol: 'https',
      //   host: '127.0.0.1',
      //   port: 9000,
      //   auth: {
      //     username: 'mikeymike',
      //     password: 'rapunz3l'
      //   }
      // }


  signup(user) {
    const { username, password } = user;
    return this.auth.post('/auth/signup', {username, password})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/auth/me', {
      crossorigin: true
  })
    .then(response => response.data)
  }
}

const auth = new Auth();

export default auth;