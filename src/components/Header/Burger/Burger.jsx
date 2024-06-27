import React, { useState } from "react";
import styles from "./Burger.module.scss";
import { Link } from "react-router-dom";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.burger}>
      <div
        className={`${styles.icon} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/products">Our Product</Link>
          </li>
          <li>
            <Link to="/delivery">Delivery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Burger;
