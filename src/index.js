import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingScreen from './components/loading-screen/LoadingScreen';

const { persistor, store } = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);
