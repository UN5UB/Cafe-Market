import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Drawer from "./components/Header/Drawer/Drawer.jsx";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import DeliveryPage from "./pages/Delivery/DeliveryPage.jsx";

function App() {
  const [cartOpened, setCardOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartRes = await axios.get(
        "https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart"
      );
      const itemsRes = await axios.get(
        "https://6678762a0bd45250561ebea6.mockapi.io/menu/Menu"
      );

      setIsLoading(false);
      setCartItems(cartRes.data);
      setItems(itemsRes.data);
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((cartObj) => cartObj.id === obj.id)) {
        await axios.delete(
          `https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((cartObj) => Number(cartObj.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart",
          obj
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log("Error");
    }
  };

  const onRemoveItem = async (id) => {
    await axios.delete(
      `https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart/${id}`
    );
    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
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
              isLoading={isLoading}
            />
          }
          exact
        />
      </Routes>
      <Routes>
        <Route
          path="/products"
          element={
            <Menu
              cartItems={cartItems}
              items={items}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Routes>
        <Route path="/delivery" element={<DeliveryPage />} />
      </Routes>
    </div>
  );
}

export default App;
