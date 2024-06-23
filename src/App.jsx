import { useEffect, useState } from "react";
import "./App.scss";
import "./components/Menu/Menu.scss";
import "./components/Popular/Popular.scss";
import About from "./components/About/About.jsx";
import Delivery from "./components/Delivery/Delivery.jsx";
import Form from "./components/Form/Form.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Drawer from "./components/Header/Drawer/Drawer.jsx";
import Card from "./components/Popular/Card/Card.jsx";
import CardMenu from "./components/Menu/CardMenu/CardMenu.jsx";
import { popular, menu } from "./CAFE_DATA.js";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("https://6678762a0bd45250561ebea6.mockapi.io/menu/Menu")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart")
      .then((res) => {
        cartItems(res.data);
      });
  }, []);

  const [cartOpened, setCardOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (obj) => {
    axios.post("https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveFromCart = (id) => {
    console.log(id);
    axios.delete(`https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  console.log(cartItems);

  return (
    <div className="wrapper">
      <div className="container">
        {cartOpened ? (
          <Drawer
            onRemove={onRemoveFromCart}
            items={cartItems}
            onCloseCart={() => setCardOpened(false)}
          />
        ) : null}
        <Header onCart={() => setCardOpened(true)} />
        <Hero />
      </div>
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
                onAdd={(obj) => onAddToCart(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <Delivery />
      <About />
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
              onAdd={(obj) => onAddToCart(menu)}
            />
          ))}
        </div>
      </section>
      <Form />
    </div>
  );
}

export default App;
