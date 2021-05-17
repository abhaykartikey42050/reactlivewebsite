import React, {Fragment} from 'react';
import Home from './Home';

import {Switch, Route, Redirect} from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
  return <Fragment>
    <head><title>Hello</title></head>
    <Navbar />
    <Switch>
      <Route exact path={process.env.PUBLIC_URL +'/'} component={Home} />
      <Route exact path={process.env.PUBLIC_URL +'/about'} component={About} />
      <Route exact path={process.env.PUBLIC_URL +'/services'} component={Services} />
      <Route exact path={process.env.PUBLIC_URL +'/contact'} component={Contact} />
      <Redirect to='/'/>
    </Switch>
    <Footer />
  </Fragment>
}

export default App;