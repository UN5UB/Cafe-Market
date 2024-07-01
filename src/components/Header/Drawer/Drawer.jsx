import React from "react";
import styles from "./Drawer.module.scss";
import CartItem from "./CartItem/CartItem";

export default function Drawer({ onCloseCart, items = [], onRemove }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerTitle}>
          <h3>Cart</h3>
          <button onClick={onCloseCart} type="button">
            <img width={50} src="/X.svg" alt="Close" />
          </button>
        </div>
        <div className={styles.drawerCards}>
          {items.map((obj) => (
            <CartItem
              key={obj.id}
              id={obj.id}
              prodId={obj.prodId}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onRemove={onRemove}
            />
          ))}
        </div>
        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  );
}
