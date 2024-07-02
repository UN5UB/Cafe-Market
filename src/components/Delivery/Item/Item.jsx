import React from "react";
import styles from "./Item.module.scss";

export default function Item({ title, description, imageUrl }) {
  return (
    <div className={styles.item}>
      <img src={imageUrl} alt="Pick a Coffee" />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}
