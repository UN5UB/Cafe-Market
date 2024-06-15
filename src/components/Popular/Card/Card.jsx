import React from "react";
import "./Card.scss";

export default function Card({ title, price, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="Vanilla Latte" />
      <div className="card__info">
        <h3 className="card__info-title">{title}</h3>
        <b className="card__info-price">$ {price}</b>
      </div>
      <div className="card__buttons">
        <div className="buttons__status">
          <button className="btn__hot">Hot</button>
          <button className="btn__cold">Cold</button>
        </div>
        <button className="btn__cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z" />
              <path
                strokeLinecap="round"
                d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
