import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className = "intro">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
