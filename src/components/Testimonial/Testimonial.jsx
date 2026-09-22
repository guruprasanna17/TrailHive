import React from "react";
import "./Testimonial.css";
import backgroundImage from "../../assets/Testimonial.png";
import dell from "../../assets/Dell.svg";
import zendesk from "../../assets/Zendesk.svg";
import rakuten from "../../assets/Rakuden.svg";
import pacificFunds from "../../assets/Pacific Funds.svg";
import ncr from "../../assets/NCR.svg";
import lattice from "../../assets/Lattice.svg";
import ted from "../../assets/TED.svg";

export default function Testimonial() {
  return (
    <section
      className="testimonial"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="testimonial-content">

        <p className="testimonial-label">TESTIMONIAL</p>

        <h2>
          "TrailHive has completely changed the way I explore
          <br className="desktop-break" />
          the outdoors. The personalized trail
          <br className="desktop-break" />
          recommendations and virtual challenges have kept
          <br className="desktop-break" />
          me motivated and engaged with my adventures."
        </h2>

        <p className="person">- John R.</p>

        <div className="trusted">
          <p>
            Trusted by teams at over 1,000 of the world's leading organizations
          </p>

          <div className="company-logos">
            <img src={dell} alt="Dell" />
            <img src={zendesk} alt="Zendesk" />
            <img src={rakuten} alt="Rakuten" />
            <img src={pacificFunds} alt="Pacific Funds" />
            <img src={ncr} alt="NCR" />
            <img src={lattice} alt="Lattice" />
            <img src={ted} alt="TED" />
          </div>
        </div>

      </div>
    </section>
  );
}