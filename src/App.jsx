import { useState } from 'react';
import reactLogo from './assets/react.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const About = () => <div>About</div>;
const Users = () => <div>Users</div>;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test/about">
          <About />
        </Route>
        <Route path="/test/users">
          <Users />
        </Route>
        <Route path="/test/">
          <div>The root!</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
