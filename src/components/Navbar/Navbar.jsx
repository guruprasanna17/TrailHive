import React from "react";
import "./Navbar.css";
import logo from "../../assets/Vector.svg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
     
        <a href="#home" className="logo">
          <img src={logo} alt="TrailHive" />
          <span>TrailHive</span>
        </a>
      
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#blog">Blog</a>
          <a href="#about">About us</a>
        </nav>
    
        <div className="nav-buttons">
          <a href="#contact" className="contact-button">
            Contact us
          </a>
          <a href="#download" className="download-button">
            Download the app
          </a>
        </div>

        <button className="menu-button">
          ☰
        </button>

      </div>
    </header>
  );
}