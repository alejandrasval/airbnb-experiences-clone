import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643494548/katie-zaferes_jh6ctb.png"
        alt="imagen"
      />
      <div className="card-description">
        <img
          className="star-icon"
          src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1643494548/star_r1ytve.png"
          alt="star-icon"
        />
        <span className="rating-number">5.0</span>
        <span className="light-text">(6) • </span>
        <span className="light-text">USA</span>
      </div>
      <p className="card-title">Life lessons with Katie Zaferes</p>
      <p className="card-price">
        <b>From $136</b> / person
      </p>
    </div>
  );
};

export default Card;
