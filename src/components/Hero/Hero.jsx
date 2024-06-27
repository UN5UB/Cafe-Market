import React from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__left}>
        <h1>
          Enjoy your <span>coffee</span> before your activity
        </h1>
        <p>
          Boost your productivity and build your mood with a glass of coffee in
          the morning{" "}
        </p>
        <div className={styles.buttons}>
          <button className={styles.order} type="button">
            Order now <img src="/HeroBtn.svg" alt="Order" />
          </button>
          <button className={styles.menu}>More menu</button>
        </div>
      </div>
      <div className={styles.hero__right}>
        <img src="/img-hero.png" alt="Hero Image" />
      </div>
    </section>
  );
}
