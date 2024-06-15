import React from "react";
import "./Item.scss";

export default function Item({ title, description, imageUrl }) {
  return (
    <div className="delivery__item">
      <img src={imageUrl} alt="Pick a Coffee" />
      <h5 className="item__title">{title}</h5>
      <p className="item__description">{description}</p>
    </div>
  );
}
