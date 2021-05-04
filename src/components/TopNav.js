import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

class TopNav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="navLogo">
          <h1>[Hello World!]</h1>
        </div>
        <nav className="navLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h3 className="h3">Home</h3>
          </Link>
          <Link to="/Portfolio" style={{ textDecoration: "none" }}>
            <h3 className="h3">Portfolio</h3>
          </Link>
          <Link to="/Contact" style={{ textDecoration: "none" }}>
            <h3 className="h3">Contact</h3>
          </Link>
        </nav>
      </div>
    );
  }
}

export default TopNav;
