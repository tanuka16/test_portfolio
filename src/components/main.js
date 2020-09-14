import React from 'react';
import HomePage from './HomePage';
import About from './AboutMe';
// import Contact from './Contact';
import Projects from './Projects';
import Blog from './Blog';
import Resume from './Resume';
import {Switch, Route} from 'react-router-dom'

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route  path="/About" component={About} />
    {/*<Route  path="/Contact" component={Contact} />*/}
    <Route  path="/Projects" component={Projects} />
    <Route  path="/Blog" component={Blog} />
    <Route  path="/Resume" component={Resume} />
  </Switch>
)

export default Main
