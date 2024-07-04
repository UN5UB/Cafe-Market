import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Drawer.module.scss";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

export default function Drawer({ onCloseCart, items = [], onRemove }) {
  const [itemsState, setItemsState] = useState(items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setItemsState(items);
  }, [items]);

  useEffect(() => {
    const newTotalPrice = itemsState.reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [itemsState]);

  const handleUpdateCount = async (id, newCount) => {
    const updatedItems = itemsState.map((item) =>
      item.id === id ? { ...item, count: newCount } : item
    );
    setItemsState(updatedItems);
    try {
      const response = await axios.put(
        `https://6678762a0bd45250561ebea6.mockapi.io/menu/Cart/${id}`,
        { count: newCount }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update count in backend");
      }

      console.log("Count updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating count:", error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerTitle}>
          <h3>Cart</h3>
          <button onClick={onCloseCart} type="button">
            <img width={50} src="X.svg" alt="Close" />
          </button>
        </div>
        {itemsState.length === 0 ? (
          <div className={styles.emptyDrawer}>
            <img src="Delivery/Pick.png" alt="Cart" />
            <div className={styles.emptyInfo}>
              <h4>Cart is empty</h4>
              <Link onClick={onCloseCart} to={"products"}>
                Choose your coffee
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.drawerCards}>
            {itemsState.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                prodId={obj.prodId}
                title={obj.title}
                price={obj.price}
                count={obj.count}
                imageUrl={obj.imageUrl}
                onRemove={onRemove}
                onUpdateCount={handleUpdateCount}
              />
            ))}
            <div className={styles.total}>
              <p>Total Price</p>
              <b>{totalPrice} $</b>
            </div>
            <button className={styles.checkout}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
