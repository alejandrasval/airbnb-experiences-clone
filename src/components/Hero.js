import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-img"
        src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643236848/photo-grid_aa28ax.png"
        alt=""
      />
      <div className="hero-description">
        <h1 className="hero-title">Online Experiences</h1>
        <p className="hero-paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
