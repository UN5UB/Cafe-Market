import React from "react";
import styles from "./DeliveryPage.module.scss";
import { delivery } from "../../CAFE_DATA";
import Item from "../../components/Delivery/Item/Item";

export default function DeliveryPage() {
  return (
    <section className={styles.delivery}>
      <h2>
        <span>Delivery</span>
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
