import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return(
    <nav className="navbar navbar-light bg-light fixed-bottom">
    <div className="container">
    <div className="row">
    <small>Amererica's Top Ten Club &copy;2018
      </small>
    </div>
    </div>
  </nav>
  );
}

export default Footer;