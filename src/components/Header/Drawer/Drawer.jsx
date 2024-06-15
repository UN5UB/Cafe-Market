import React from "react";
import "./Drawer.scss";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`drawer ${isOpen ? "drawer--open" : ""}`}>
      <div className="drawer__content">
        <button className="drawer__close" onClick={onClose}>
          ×
        </button>
        <h2>Your Cart</h2>
        {/* Cart items can be listed here */}
        <button className="drawer__checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Drawer;
