import React from "react";
import styles from "./Form.module.scss";

export default function Form() {
  return (
    <section
      className={styles.form}
      style={{
        background: "url(Icons/newsletter.png) no-repeat center",
        backgroundSize: "100%",
      }}
    >
      <div className={styles.info}>
        <h2>Subscribe to get 50% discount price</h2>
        <form>
          <input placeholder="Email address" type="email" name="discount" />
          <button>Order now</button>
        </form>
      </div>
    </section>
  );
}
