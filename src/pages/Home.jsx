import React from "react";
import About from "../components/About/About.jsx";
import Delivery from "../components/Delivery/Delivery.jsx";
import Form from "../components/Form/Form.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Card from "../components/Popular/Card/Card.jsx";
import CardMenu from "../components/Menu/CardMenu/CardMenu.jsx";
import menu from "../components/Menu/Menu.module.scss";
import popular from "../components/Popular/Popular.module.scss";

export default function Home({ items, onAddToCart }) {
  return (
    <>
      <Hero />
      <section className={popular.popular}>
        <h2>
          Popular <span>Now</span>
        </h2>
        <div className={popular.bacground}>
          <div className={popular.row}>
            {items.slice(3, 7).map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onAdd={(obj) => onAddToCart(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <Delivery />
      <About />
      <section className={menu.menu}>
        <h2>
          Special menu <span>for you</span>
        </h2>
        <div className={menu.row}>
          {items.map((menu) => (
            <CardMenu
              key={menu.id}
              id={menu.id}
              title={menu.title}
              subtitle={menu.subtitle}
              imageUrl={menu.imageUrl}
              price={menu.price}
              onAdd={(obj) => onAddToCart(menu)}
            />
          ))}
        </div>
      </section>
      <Form />
    </>
  );
}
