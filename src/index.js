import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


import { Provider } from 'react-redux';
import { store } from './redux/store.js';

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
    <App />
  </Provider>
  </React.StrictMode>
);

