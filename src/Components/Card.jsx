import React from "react";
import star from "/src/assets/star.png";
import katie from "/src/assets/katie-zaferes.png";

export default function Card() {
  return (
    <div className="card">
      <img src={katie} className="card--img" />
      <div className="card--stats">
        <img className="card--star" src={star} />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>
        <span className="bold">Stuff</span>
      </p>
      <p>Stuff</p>
    </div>
  );
}
