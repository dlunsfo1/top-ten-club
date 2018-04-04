import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-custom-red fixed-top">
<div className="container">
  <a className="navbar-brand" href="/"><img src="logo.svg" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav"> */}
      {/* <NavLink exact to="/" className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></NavLink> */}
      {/* <NavLink exact to="/venues" className="nav-item nav-link" href="#">All Venues</NavLink> */}
      {/* <NavLink exact to="/" className="nav-item nav-link" href="#">Features</NavLink> */}
      {/* <NavLink exact to="/admin" className="nav-item nav-link" href="#">Admin</NavLink> */}
      {/* <NavLink exact to="/user" className="nav-item nav-link" href="#">User</NavLink>   */}
      {/* <NavLink exact to="/log-in" className="nav-item nav-link" href="#">Login</NavLink>  
      <NavLink exact to="/venue-admin" className="nav-item nav-link" href="#">Venue Admin</NavLink>       */}
    {/* </div>
  </div> */}

      <span className="navbar-text">
      <a href="/log-in"><span className="oi oi-person" aria-hidden="true" title="login"></span></a>
      <a href="/venue-admin"><span className="oi oi-cog" aria-hidden="true" title="admin"></span></a>
    </span>
    </div>
</nav>
);}



export default Nav;