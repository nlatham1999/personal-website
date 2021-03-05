import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const App = () => (
  <div className='app'>
    <h1>Nick Latham
    </h1>
    <Navigation />
    <Main />
  </div>
);

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
);

export default App;