import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./custom.css');
import Home from './components/Home.jsx';
import Venues from './container/Venues/Venues';
import User from './container/User/User';
import Login from './components/Login/Login';
import VenueDetail from './container//VenueDetail/VenueDetail';
import VenueAdmin from './container/VenueAdmin/VenueAdmin.jsx';
import Nav from './UI/Nav/Nav.jsx';
import Footer from './UI/Footer/Footer.jsx';
import Aux from './hoc/Aux/Aux';
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
      <Route exact path="/" component={Home}/>  
      <Route path="/venues" component={Venues} />
      <Route path="/venue-admin" component={VenueAdmin} />
      <Route path="/user" component={User} />
      <Route path="/log-in" component={Login} />
      <Route path="/venue-detail/:id" component={VenueDetail} />
      </Switch>
    </div>
      <Footer />
      </Aux>
      </BrowserRouter>
    );
  }
}

export default app;