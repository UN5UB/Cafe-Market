import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__left-title">
          Enjoy your <span>coffee</span> before your activity
        </h1>
        <p className="hero__left-description">
          Boost your productivity and build your mood with a glass of coffee in
          the morning{" "}
        </p>
        <div className="hero__left-buttons">
          <button className="order__btn" type="button">
            Order now <img src="/HeroBtn.svg" alt="Order" />
          </button>
          <button className="menu__btn">More menu</button>
        </div>
      </div>
      <div className="hero__right">
        <img src="/img-hero.png" alt="Hero Image" />
      </div>
    </section>
  );
}
