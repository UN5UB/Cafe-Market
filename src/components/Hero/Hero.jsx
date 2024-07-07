import React from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__left}>
        <motion.h1
          initial={{
            x: -100,
          }}
          animate={{
            x: 0,
          }}
        >
          Enjoy your <span>coffee</span> before your activity
        </motion.h1>
        <motion.p
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
        >
          Boost your productivity and build your mood with a glass of coffee in
          the morning{" "}
        </motion.p>
        <Link to="products" className={styles.order} type="button">
          Order now <img src="Icons/HeroBtn.svg" alt="Order" />
        </Link>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
        className={styles.hero__right}
      >
        <img src="Icons/img-hero.png" alt="Hero Image" />
      </motion.div>
    </section>
  );
}
