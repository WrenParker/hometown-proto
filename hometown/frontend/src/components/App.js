import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Home from './views/Home/Home.js'

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Home />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))