import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import createStore from './store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

//import App from './components/App';
import AppRouter from './components/AppRouter';

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

