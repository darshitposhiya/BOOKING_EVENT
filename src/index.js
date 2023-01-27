import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import './css/bootstrap.min.css';

import App from './App';


ReactDOM.render(
  <>
  
  <BrowserRouter>
  <App></App>
  </BrowserRouter>
  
  </>,document.getElementById('root'));
