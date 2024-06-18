import React from "react";
import "./Menu.scss";
import CardMenu from "./CardMenu/CardMenu";
import { menu } from "../../CAFE_DATA";

export default function Menu() {
  return (
    <section className="menu">
      <h2>
        Special menu <span>for you</span>
      </h2>
      <div className="menu__row">
        {menu.map((menu) => (
          <CardMenu
            key={menu.id}
            title={menu.title}
            subtitle={menu.subtitle}
            imageUrl={menu.imageUrl}
            price={menu.price}
          />
        ))}
      </div>
    </section>
  );
}
