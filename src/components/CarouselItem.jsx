import React from "react";
import Button from "./Button";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <h4>{item.title}</h4>
      <img className="carousel-img" src={item.image} alt={item.title} />
      <div className="carousel-item-text">{item.description}</div>
      <Button text="see more..." link="/" />
    </div>
  );
};
