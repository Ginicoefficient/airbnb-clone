import React from "react";
import photoGrid from "/src/assets/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="photo-grid">
        <img src={photoGrid} />
      </div>
      <div className="hero--text-container">
        <h1>Online Experiences</h1>
        <p>
          Join unique activies being led by one-of-a-kind hosts-- all without
          leaving home
        </p>
      </div>
    </section>
  );
}
