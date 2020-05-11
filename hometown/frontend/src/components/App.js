import React, {Fragment} from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import Nav from './views/Home/Home.js'

function App() {
  return (
      <div id="app">
        <Nav />
      </div>
    
  );
}

ReactDOM.render(<App />, document.getElementById('app'))