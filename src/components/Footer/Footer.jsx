import React from "react";
import "./Footer.css";
import logo from "../../assets/Vector 2.svg";
import facebook from "../../assets/facebook-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import twitter from "../../assets/twitter-icon.svg";
import linkedin from "../../assets/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      
      <div className="footer-top">        
        <div className="footer-logo">
          <img src={logo} alt="TrailHive Logo" />
          <span>TrailHive</span>
        </div>
      
        <div className="footer-column">
          <h3>App</h3>
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#pricing">Pricing</a>
          <a href="#explore">Explore</a>
          <a href="#trails">Trails</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#jobs">Jobs</a>
          <a href="#press">Press</a>
          <a href="#support">Support</a>
          <a href="#members">Members</a>
        </div>
  
        <div className="subscribe">
          <p>Enter your email</p>

          <div className="subscribe-row">
            <input
              type="email"
              aria-label="Email address"
            />

            <button type="button">
              Subscribe
            </button>
          </div>

          <small>
            By subscribing you agree to our{" "}
            <u>Privacy Policy</u>
          </small>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2023 TrailHive. All rights reserved.
        </span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Cookies Settings</span>
 
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  )
}