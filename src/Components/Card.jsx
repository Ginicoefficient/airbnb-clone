import React from "react";
import star from "/src/assets/star.png";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.card.coverImg} className="card--img" />
      <div className="card--stats">
        <img className="card--star" src={star} />
        <span>{props.card.stats.rating} </span>
        <span className="gray">({props.card.stats.reviewCount}) • </span>
        <span className="gray">{props.card.location}</span>
      </div>
      <p>
        <span className="bold"> From ${props.card.price} </span>
      </p>
      <p>{props.card.title}</p>
    </div>
  );
}
