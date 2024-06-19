import React from "react";
import styles from "./Drawer.module.scss";
import CartItem from "./CartItem/CartItem";
import { menu } from "../../../CAFE_DATA";

export default function Drawer({ onCloseCart, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerTitle}>
          <h3>Cart</h3>
          <button onClick={onCloseCart} type="button">
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#000000"
                  strokeWidth="1.5"
                ></circle>{" "}
                <path
                  d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className={styles.drawerCards}>
          {menu.map((obj) => (
            <CartItem
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
        <button className={styles.checkout}>Checkout</button>
      </div>
    </div>
  );
}
