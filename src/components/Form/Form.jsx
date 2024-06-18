import React from "react";
import "./Form.scss";

export default function Form() {
  return (
    <section className="form">
      <div className="form__info">
        <h2>Subscribe to get 50% discount price</h2>
        <form>
          <input placeholder="Email address" type="email" name="discount" />
          <button>Order now</button>
        </form>
      </div>
    </section>
  );
}
