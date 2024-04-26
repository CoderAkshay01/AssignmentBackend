import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <Link  to="/" className="logo">LOGO</Link>        
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <a>Menu</a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
