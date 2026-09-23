import React from "react";
import "./SecondTestimonial.css";
import testimonialBg from "../../assets/second-testimonial-bg.jpg.png";

export default function SecondTestimonial () {
  return (
    <section
      className="second-testimonial"
      style={{
        backgroundImage: `url(${testimonialBg})`,
      }}
    >
      <div className="second-testimonial-overlay"></div>

      <div className="second-testimonial-content">
        <p className="second-testimonial-label">
          TESTIMONIAL
        </p>

        <h2 className="second-testimonial-text">
          "I love the social networking aspect <br />
          of TrailHive. It's great to connect<br />
          with other hikers and bikers and<br />
          plan group events together."
        </h2>

        <p className="second-testimonial-author">
          - Sara L.
        </p>

        <button className="second-testimonial-button">
          Learn More
        </button>
      </div>
    </section>
  );
};

