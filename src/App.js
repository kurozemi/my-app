import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Authentication from "./authentication/Authentication"

import './App.css';

function App() {
  return (
    <Router>
      <Switch>

        <Route path = "/" exact= {true}>
          <Authentication/>
        </Route>

      </Switch>
    </Router>
  )

}

export default App;
