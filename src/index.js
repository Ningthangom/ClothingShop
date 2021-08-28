import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//the provider is component class which is from redux 
// once passed the store object will be able to give that redux store context 
// to the rest of the application 
import { Provider } from 'react-redux'
import './index.css';  
import App from './App';

import store from './redux/store'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
