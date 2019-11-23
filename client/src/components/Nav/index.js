import React from "react";

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     MicroBoss
    //   </a>
    // </nav>
    <nav className="navbar is-primary">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Project 3
          </a>
          <span className="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            <a href="/" className="navbar-item ">
              Home
            </a>
            <a href="/" className="navbar-item">
              Profile
            </a>
            <a href="/" className="navbar-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
