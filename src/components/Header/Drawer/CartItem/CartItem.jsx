import React from "react";
import styles from "./CartItem.module.scss";

export default function CartItem({
  title,
  price,
  imageUrl,
  id,
  count,
  onRemove,
  onUpdateCount,
}) {
  const totalCost = count * price;

  const increment = () => {
    const newCount = count + 1;
    onUpdateCount(id, newCount);
  };

  const decrement = () => {
    const newCount = count > 1 ? count - 1 : 1;
    onUpdateCount(id, newCount);
  };

  return (
    <div key={id} className={styles.cart__item}>
      <div className={styles.cart__img}>
        <img src={imageUrl} alt="Product" />
      </div>
      <div className={styles.cart__info}>
        <h3 className={styles.cart__title}>{title}</h3>
        <b>{totalCost} $</b>
      </div>
      <div className={styles.cart__counter}>
        <button onClick={increment}>+</button>
        <input value={count} readOnly />
        <button onClick={decrement}>-</button>
      </div>
      <button onClick={() => onRemove(id)} className={styles.cart__remove}>
        ×
      </button>
    </div>
  );
}
