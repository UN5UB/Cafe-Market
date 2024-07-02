import React, { useContext } from "react";
import styles from "./Drawer.module.scss";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import AppContext from "../../../context";

export default function Drawer({ onCloseCart, items = [], onRemove }) {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerTitle}>
          <h3>Cart</h3>
          <button onClick={onCloseCart} type="button">
            <img width={50} src="/X.svg" alt="Close" />
          </button>
        </div>
        {items.length === 0 ? (
          <>
            <div className={styles.emptyDrawer}>
              <img src="/Delivery/Pick.png" alt="Cart" />
              <div className={styles.emptyInfo}>
                <h4>Cart is empty</h4>
                <Link to={"/products"}>Choose your coffee</Link>
              </div>
            </div>
          </>
        ) : (
          <>
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
              <div className={styles.total}>
                <p>Total Price</p>
                <b>{totalPrice} $</b>
              </div>
              <button className={styles.checkout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
