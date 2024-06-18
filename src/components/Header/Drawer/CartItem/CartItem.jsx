import React, { useState } from "react";
import "./CartItem.scss";

export default function CartItem({ title, price, imageUrl }) {
  let [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="cart__item">
      <div className="cart__img">
        <img src={imageUrl} alt="Product" />
      </div>
      <div className="cart__info">
        <h3 className="cart__title">{title}</h3>
        <b>{price} $</b>
      </div>
      <div className="cart__counter">
        <button onClick={increment}>+</button>
        <input value={count} />
        <button disabled={count === 1} onClick={decrement}>
          -
        </button>
      </div>
      <button className="cart__remove">×</button>
    </div>
  );
}
