import React from 'react';
import Page from './Components/Page/Page';
import List from './Components/List/List';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';


function App(props) {

  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/Page">
        <Page />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
