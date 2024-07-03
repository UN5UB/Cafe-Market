import React from "react";
import styles from "./Item.module.scss";
import { motion } from "framer-motion";

export default function Item({ title, description, imageUrl }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className={styles.item}
    >
      <img src={imageUrl} alt="Pick a Coffee" />
      <h5>{title}</h5>
      <p>{description}</p>
    </motion.div>
  );
}
