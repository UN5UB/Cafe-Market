import React from "react";
import styles from "./Discover.module.scss";
import { motion } from "framer-motion";
export default function Discover() {
  return (
    <motion.section
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={styles.discover}
    >
      <h2>
        <span>Discover</span> the best coffee
      </h2>
      <div className={styles.info}>
        <div className={styles.description}>
          <p>
            Cafe Shop is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
        </div>
        <div className={styles.image}>
          <img src="Icons/CoffeeCup.png" alt="Coffee" />
        </div>
      </div>
    </motion.section>
  );
}
