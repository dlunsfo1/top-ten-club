import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return(
    <nav className="navbar navbar-light bg-light fixed-bottom">
    <div className="container">
    <a className="navbar-brand" href="#"><small className="copyright">Amererica's Top Ten Club &copy;2018
      {/* <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
      </small>
    </a>
    <span className="navbar-text">
    {/* <span className="lnr lnr-phone-handset"></span> */}
    </span>
    </div>
  </nav>
  );
}

export default Footer;