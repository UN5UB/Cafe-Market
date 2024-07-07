import React, { useContext } from "react";
import styles from "./Header.module.scss";
import Burger from "./Burger/Burger";
import { Link } from "react-router-dom";
import AppContext from "../../context";

const Header = ({ onCart }) => {
  const { cartItems } = useContext(AppContext);

  return (
    <header className={styles.header}>
      <Link to="Cafe-Market" className={styles.logo}>
        <img src="/icons/logo_coffe.svg" alt="Cafe Street" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="about">About us</Link>
          </li>
          <li>
            <Link to="products">Our Product</Link>
          </li>
          <li>
            <Link to="delivery">Delivery</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button onClick={onCart} className={styles.cart}>
          {cartItems.length === 0 ? (
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
          ) : (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66667 9.33333H25.0533C25.4259 9.33334 25.7943 9.41142 26.1349 9.56254C26.4754 9.71365 26.7805 9.93444 27.0305 10.2107C27.2805 10.4869 27.4698 10.8125 27.5863 11.1664C27.7027 11.5203 27.7437 11.8946 27.7067 12.2653L26.9067 20.2653C26.8409 20.9233 26.5329 21.5334 26.0426 21.9772C25.5523 22.4209 24.9146 22.6666 24.2533 22.6667H11.52C10.9033 22.6669 10.3056 22.4534 9.82859 22.0625C9.35162 21.6716 9.02488 21.1274 8.904 20.5227L6.66667 9.33333Z"
                stroke="#1D1D1D"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M21.3333 28H24M6.66667 9.33333L5.58667 5.00933C5.51444 4.721 5.34794 4.46508 5.11361 4.28221C4.87929 4.09934 4.59057 4.00001 4.29333 4H2.66667L6.66667 9.33333ZM10.6667 28H13.3333H10.6667Z"
                stroke="#1D1D1D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="27" cy="9" r="4.5" fill="#FF912B" stroke="white" />
            </svg>
          )}
        </button>
        <Burger />
      </div>
    </header>
  );
};

export default Header;
