import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom: '50px'}}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink exact to="/" className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></NavLink>
      <NavLink exact to="/" className="nav-item nav-link" href="#">Features</NavLink>
      <NavLink exact to="/admin" className="nav-item nav-link" href="#">Admin</NavLink>
      <NavLink exact to="/venue-admin" className="nav-item nav-link" href="#">Venue Admin</NavLink>      
    </div>
  </div>
</nav>
);}



export default Nav;