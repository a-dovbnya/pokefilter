import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AppRouter from './components/AppRouter';
import createStore from './store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './components/App';

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

