import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './views/Home/Home.js'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}


ReactDOM.render(<App />, document.getElementById('app'))