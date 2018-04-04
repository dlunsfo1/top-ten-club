import React from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-custom-red fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.svg" />
        </a>
        <span className="navbar-text">
          <a href="/log-in">
            <span className="oi oi-person" aria-hidden="true" title="login" />
          </a>
          <a href="/venue-admin">
            <span className="oi oi-cog" aria-hidden="true" title="admin" />
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
