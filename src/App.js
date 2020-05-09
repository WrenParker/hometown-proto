import React, {Fragment} from 'react';
import Home from './views/Home/Home.jsx'

import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Home />
      </div>
    </Provider>
    
  );
}

export default App;
