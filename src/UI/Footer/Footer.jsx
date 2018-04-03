import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return(
    <nav className="navbar navbar-light bg-light fixed-bottom">
    <a className="navbar-brand" href="#">
      {/* <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
      Brand
    </a>
  </nav>
  );
}

export default Footer;