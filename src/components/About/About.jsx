import React from "react";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <img src="/About/about.png" alt="Vanilla Latte" />
        </div>
        <div className="about__info">
          <h2>
            About <span>us</span>
          </h2>
          <h4>We provide quality coffee, and ready to deliver.</h4>
          <p>
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
          <button type="button">Get your coffee</button>
        </div>
      </div>
    </section>
  );
}
