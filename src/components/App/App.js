import React, { Component } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Contact from '../Contact/Contact.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact path='/'
            render={() => <LandingPage /> } />
          <Route
            path='/portfolio'
            render={() => <Portfolio /> } />
          <Route
            path='/contact'
            render={() => <Contact /> } />
        </div>
      </Router>
    );
  }
}

export default App;
