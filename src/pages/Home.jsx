import React, { useContext } from "react";
import About from "../components/About/About.jsx";
import Delivery from "../components/Delivery/Delivery.jsx";
import Form from "../components/Form/Form.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Card from "../components/Popular/Card/Card.jsx";
import CardMenu from "../components/Menu/CardMenu/CardMenu.jsx";
import menu from "../components/Menu/Menu.module.scss";
import popular from "../components/Popular/Popular.module.scss";
import AppContext from "../context.jsx";
import { motion } from "framer-motion";

export default function Home({ onAddToCart }) {
  const { items, isLoading } = useContext(AppContext);

  const renderItems = () => {
    return (isLoading ? [...Array(4)] : items)
      .slice(0, 4)
      .map((item, index) => {
        if (isLoading) {
          return <Card key={index} loading={isLoading} />;
        }

        if (!item) return null;

        return (
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Card
              key={item.id}
              id={item.id}
              prodId={item.prodId}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              onAdd={() => onAddToCart(item)}
              loading={isLoading}
            />
          </motion.div>
        );
      });
  };

  const renderMenu = () => {
    return (isLoading ? [...Array(10)] : items).map((menu, index) => {
      if (isLoading) {
        return <CardMenu key={index} loading={isLoading} />;
      }
      if (!menu) return null;
      return (
        <CardMenu
          key={menu.id}
          id={menu.id}
          prodId={menu.prodId}
          title={menu.title}
          subtitle={menu.subtitle}
          imageUrl={menu.imageUrl}
          price={menu.price}
          onAdd={() => onAddToCart(menu)}
          loading={isLoading}
        />
      );
    });
  };

  return (
    <>
      <Hero />
      <section className={popular.popular}>
        <h2>
          Popular <span>Now</span>
        </h2>
        <div className={popular.background}>
          <div className={popular.row}>{renderItems()}</div>
        </div>
      </section>

      <Delivery />
      <About />
      <section className={menu.menu}>
        <h2>
          Special menu <span>for you</span>
        </h2>
        <div className={menu.row}>{renderMenu()}</div>
      </section>
      <Form />
    </>
  );
}
