import React from "react";
import styles from "./Delivery.module.scss";
import { delivery } from "../../CAFE_DATA";
import Item from "./Item/Item.jsx";
import { motion } from "framer-motion";

export default function Delivery() {
  return (
    <motion.section className={styles.delivery}>
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        How to use delivery <span>service</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={styles.row}
      >
        {delivery.map((obj) => (
          <Item
            key={obj.id}
            title={obj.title}
            description={obj.description}
            imageUrl={obj.imageUrl}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}
