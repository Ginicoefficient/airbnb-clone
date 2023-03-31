import React from "react";
import star from "/src/assets/star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card--img" />
      <div className="card--stats">
        <img className="card--star" src={star} />
        <span>{props.rating} </span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>
        <span className="bold"> From ${props.price} </span>
      </p>
      <p>{props.title}</p>
    </div>
  );
}
