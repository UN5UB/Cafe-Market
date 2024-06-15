import React from "react";
import "./Delivery.scss";
import { delivery } from "../../CAFE_DATA";
import Item from "./Item/Item.jsx";

export default function Delivery() {
  return (
    <section className="delivery">
      <h2 className="delivery__title">
        How to use delivery <span>service</span>
      </h2>
      <div className="delivery__row">
        {delivery.map((obj) => (
          <Item
            key={obj.id}
            title={obj.title}
            description={obj.description}
            imageUrl={obj.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
