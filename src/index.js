import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const API_KEY = '4c8bc95958dd9c067669abb351d5bd28';
axios.interceptors.request.use(
  (config) => {
    config.params = { ...config.params, api_key: API_KEY };
    return config;
  },
  (error) => Promise.reject(error)
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
