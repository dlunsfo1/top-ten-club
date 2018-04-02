import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Home from './src/components/Home.jsx';
import Admin from './src/container/Admin/Admin.jsx';
import About from './src/components/About.jsx';
import VenueAdmin from './src/container/VenueAdmin/VenueAdmin.jsx';
import Nav from './src/UI/Nav/Nav.jsx';
import Footer from './src/UI/Footer/Footer.jsx';
import Aux from './src/hoc/Aux/Aux';
// Import routing components
import { BrowserRouter, Route, NavLink, Link, Switch } from 'react-router-dom';

class app extends Component {
  render() {
    return (
      <BrowserRouter>
      <Aux>
      <Nav />
    <div className="App">
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/venue-admin" component={VenueAdmin} />
      <Route exact path="/" component={Home}/>
      </Switch>
    </div>
      <Footer />
      </Aux>
      </BrowserRouter>
    );
  }
}

export default app;