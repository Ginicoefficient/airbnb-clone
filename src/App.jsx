import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./Components/data.js";

function App() {
  //get your data, then map over the data and send in appropriate items as props to component
  //will give you an array of JSX elements that can then be rendered in APP()
  const cardElements = data.map((card) => {
    return (
      <Card
        img={card.coverImg}
        rating={card.rating}
        reviewCount={card.reviewCount}
        location={card.location}
        title={card.title}
        price={card.price}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">{cardElements}</div>
    </div>
  );
}

export default App;
