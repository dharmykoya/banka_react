import React from "react";
import Logo from "../../../public/assets/logo5.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <div className="logo-container">
        <a href="index.html" className="logo-text">
          <img className="index-logo" src={Logo} />
          anka
        </a>
      </div>
      <a className="icon" onclick="navToggle()">
        <i className="fa fa-bars" />
      </a>
      <div className="right navbar-right">
        <a className="topnav-anchor" href="signin.html">
          Login
        </a>
        <a className="topnav-anchor" href="signup.html">
          Signup
        </a>
      </div>
    </div>
  );
};

export default Navbar;
