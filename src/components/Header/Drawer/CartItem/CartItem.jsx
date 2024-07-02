import React, { useState } from "react";
import styles from "./CartItem.module.scss";

export default function CartItem({
  title,
  price,
  imageUrl,
  prodId,
  id,
  onRemove,
}) {
  let [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div key={id} className={styles.cart__item}>
      <div className={styles.cart__img}>
        <img src={imageUrl} alt="Product" />
      </div>
      <div className={styles.cart__info}>
        <h3 className={styles.cart__title}>{title}</h3>
        <b>{price} $</b>
      </div>
      <div className={styles.cart__counter}>
        <button onClick={increment}>+</button>
        <input value={count} />
        <button disabled={count === 1} onClick={decrement}>
          -
        </button>
      </div>
      <button onClick={() => onRemove(id)} className={styles.cart__remove}>
        ×
      </button>
    </div>
  );
}
