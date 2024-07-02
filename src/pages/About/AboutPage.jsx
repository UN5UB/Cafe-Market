import React from "react";
import styles from "./AboutPage.module.scss";
import Discover from "../Discover/Discover";

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <h2>
        <span>About Us</span>
      </h2>
      <div className={styles.top}>
        <div className={styles.top__text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            quasi debitis dicta similique unde autem. Aliquid, tenetur deleniti,
            labore reiciendis debitis dolorum voluptates quasi numquam vero
            accusamus et modi velit?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            quasi debitis dicta similique unde autem. Aliquid, tenetur deleniti,
            labore reiciendis debitis dolorum voluptates quasi numquam vero
            accusamus et modi velit?
          </p>
        </div>

        <img src="/About/about.png" alt="Coffee" />
      </div>
      <div className={styles.bottom}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          aliquam! Facilis exercitationem modi porro harum delectus fugiat optio
          nihil natus voluptatibus, libero facere molestias totam dicta,
          repudiandae quibusdam nostrum eum.
        </p>
        <img src="/About/Coffee Types Banner Desktop.webp" alt="Coffee" />
      </div>
      <Discover />
    </section>
  );
}
