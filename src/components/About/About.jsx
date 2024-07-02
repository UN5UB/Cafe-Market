import React from "react";
import { Link } from "react-router-dom";

import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div>
          <img src="/About/about.png" alt="Vanilla Latte" />
        </div>
        <div className={styles.info}>
          <h2>
            About <span>us</span>
          </h2>
          <h4>We provide quality coffee, and ready to deliver.</h4>
          <p>
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
          <Link to="/products">Get your coffee</Link>
        </div>
      </div>
    </section>
  );
}
