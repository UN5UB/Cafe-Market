import React from "react";
import styles from "./AboutPage.module.scss";
import Discover from "../Discover/Discover";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <motion.h2
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span>About Us</span>
      </motion.h2>
      <div className={styles.top}>
        <div className={styles.top__text}>
          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            quasi debitis dicta similique unde autem. Aliquid, tenetur deleniti,
            labore reiciendis debitis dolorum voluptates quasi numquam vero
            accusamus et modi velit?
          </motion.p>
          <motion.p
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            quasi debitis dicta similique unde autem. Aliquid, tenetur deleniti,
            labore reiciendis debitis dolorum voluptates quasi numquam vero
            accusamus et modi velit?
          </motion.p>
        </div>

        <motion.img
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          src="About/about.png"
          alt="Coffee"
        />
      </div>
      <div className={styles.bottom}>
        <motion.p
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          aliquam! Facilis exercitationem modi porro harum delectus fugiat optio
          nihil natus voluptatibus, libero facere molestias totam dicta,
          repudiandae quibusdam nostrum eum.
        </motion.p>
        <motion.img
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          src="About/Coffee Types Banner Desktop.webp"
          alt="Coffee"
        />
      </div>
      <Discover />
    </section>
  );
}
