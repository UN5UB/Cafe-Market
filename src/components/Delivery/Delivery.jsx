import React from "react";
import styles from "./Delivery.module.scss";
import { delivery } from "../../CAFE_DATA";
import Item from "./Item/Item.jsx";

export default function Delivery() {
  return (
    <section className={styles.delivery}>
      <h2>
        How to use delivery <span>service</span>
      </h2>
      <div className={styles.row}>
        {delivery.map((obj) => (
          <Item
            key={obj.id}
            title={obj.title}
            description={obj.description}
            imageUrl={obj.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
