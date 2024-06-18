import React, { useState } from "react";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a className="header__logo">
        <img src="/logo_coffe.svg" alt="Cafe Street" />
      </a>
      <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
        <a href="#" className="header__link">
          About us
        </a>
        <a href="#" className="header__link">
          Our Product
        </a>
        <a href="#" className="header__link">
          Delivery
        </a>
      </nav>
      <div className="header__search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header__buttons">
        <button onClick={props.onCart} className="header__cart">
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
        <button className="header__burger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
