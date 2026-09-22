import React from "react";
import "./Explore.css";
import exploreImage from "../../assets/explore.jpg";

export default function Explore() {
  return (
    <section className="explore" id="explore">
      <h2>
        Find new trails to explore and
        <br />
        adventures to embark on.
      </h2>

      <img
        src={exploreImage}
        alt="Two hikers walking toward a mountain"
      />
    </section>
  );
}

 