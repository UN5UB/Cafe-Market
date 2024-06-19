import React, { useState } from "react";
import "./Burger.scss";
import { nav } from "../../../CAFE_DATA";
import NavLink from "../NavLinks/NavLink";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          {nav.map((link) => (
            <NavLink title={link.title} link={link.link} key={link.id} />
          ))}
        </ul>
        <div className="burger__search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
    </div>
  );
};

export default Burger;
