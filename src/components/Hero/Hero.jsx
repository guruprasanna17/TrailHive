import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="small-title">TRAILHIVE</p>

        <h1>
          Your Ultimate
          <br />
          Outdoor
          <br />
          Companion
        </h1>

        <p className="hero-description">
          Are you tired of spending hours searching for the perfect hiking or
          biking trail? TrailHive - the ultimate outdoor adventure app that
          connects you with the best trails in your area.
        </p>

        <a href="#download" className="hero-button">
          Download the app
        </a>
      </div>

      <div className="hero-image">
        <img
          src={heroImage}
          alt="Hiker beside a mountain lake"
        />
      </div>
    </section>
  );
}

