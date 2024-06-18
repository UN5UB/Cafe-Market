import React from "react";
import "./Popular.scss";
import Card from "./Card/Card";
import { popular } from "../../CAFE_DATA.js";

export default function Popular() {
  return (
    <section className="popular">
      <h2>
        Popular <span>Now</span>
      </h2>
      <div className="popular__background">
        <div className="popular__row">
          {popular.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              onAdd={(obj) => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
