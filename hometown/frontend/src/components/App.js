import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Home from './views/Home/Home.js'
import StorePage from './views/StoreView/StorePage.js'
import Navbar from './views/Shared/Navbar.js'
import Login from './views/Login/Login.js'

import CreateStore from './views/CreateStore/CreateStore.js'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './views/Shared/css/main.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app" className="window">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Store">
              <StorePage />
            </Route>
            <Route path="/Create-Store">
              <CreateStore />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}


ReactDOM.render(<App />, document.getElementById('app'))