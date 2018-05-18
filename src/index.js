import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LL from './LL';
import About from './About';
import './index.css';

import configureStore from './configureStore'
const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route exact path="/" component={LL} />
          <Route path="/organize" component={About} />
        </div>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
