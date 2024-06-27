import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Drawer from "./components/Header/Drawer/Drawer.jsx";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";

function App() {
  const [cartOpened, setCardOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

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
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
      axios.delete(
        `https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((cartObj) => Number(cartObj.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    console.log(id);
  };

  console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onCloseCart={() => setCardOpened(false)}
        />
      ) : null}
      <Header onCart={() => setCardOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              items={items}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
      </Routes>
      <Routes>
        <Route path="/products" element={<Menu />} exact />
      </Routes>
    </div>
  );
}

export default App;
