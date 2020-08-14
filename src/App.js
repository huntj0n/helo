import React from 'react';
import Nav from './Components/Nav/nav';
import {HashRouter} from 'react-router-dom';
import routes from './routes'
import './reset.css';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav/>
      {routes}
      </div>
    </HashRouter>
  );
}

export default App;
