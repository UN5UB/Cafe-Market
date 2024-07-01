import React, { useState } from "react";
import styles from "./Header.module.scss";
import Burger from "./Burger/Burger";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/logo_coffe.svg" alt="Cafe Street" />
      </Link>
      <nav>
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
      <div className={styles.buttons}>
        <button onClick={props.onCart} className={styles.cart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z" />
              <path
                strokeLinecap="round"
                d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"
              />
            </g>
          </svg>
        </button>
        <Burger />
      </div>
    </header>
  );
};

export default Header;
