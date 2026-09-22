import React from "react";
import "./Features.css";
import featureOne from "../../assets/feature-1.jpg";
import featureTwo from "../../assets/feature-2.jpg";
import featureThree from "../../assets/feature-3.jpg";

const featureData = [
  {
    image: featureOne,
  },
  {
    image: featureTwo,
  },
  {
    image: featureThree,
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="features-heading">
        <p>FEATURES</p>
        <h2>
          Stay Active
          <br />
          and Healthy
        </h2>
        <a href="#about">Learn more</a>
      </div>

      <div className="feature-list">
        {featureData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt="Outdoor activity" />

            <h3>Access nature</h3>

            <p>
              With TrailHive, you'll have access to a comprehensive database of
              trails, complete with detailed information on ratings, difficulty
              levels, and user reviews.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

