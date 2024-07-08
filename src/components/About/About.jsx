import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.scss";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div>
          <motion.img
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src="About/about.png"
            alt="Vanilla Latte"
          />
        </div>
        <div className={styles.info}>
          <motion.h2
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About <span>us</span>
          </motion.h2>
          <motion.h4
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We provide quality coffee, and ready to deliver.
          </motion.h4>
          <motion.p
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </motion.p>
          <Link to="products">Get your coffee</Link>
        </div>
      </div>
    </section>
  );
}
