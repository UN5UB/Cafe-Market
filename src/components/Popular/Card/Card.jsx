import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../../context";
import { motion } from "framer-motion";

export default function Card({
  title,
  price,
  imageUrl,
  onAdd,
  prodId,
  loading = false,
}) {
  const { isAdded } = useContext(AppContext);

  const onClickCart = () => {
    onAdd({ title, price, imageUrl, onAdd, prodId });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={400}
          height={330}
          viewBox="0 0 380 330"
          backgroundColor="#ffd28d"
          foregroundColor="#f9d9aa"
          className={styles.loader}
        >
          <rect x="0" y="0" rx="10" ry="10" width="300" height="220" />
          <rect x="0" y="238" rx="10" ry="10" width="300" height="85" />
        </ContentLoader>
      ) : (
        <>
          <img src={imageUrl} alt="Vanilla Latte" />{" "}
          <div className={styles.info}>
            <h3>{title}</h3>
            <b>$ {price}</b>{" "}
          </div>{" "}
          <div className={styles.button}>
            {" "}
            <button
              onClick={onClickCart}
              className={isAdded(prodId) ? styles.cart__active : styles.cart}
            >
              {isAdded(prodId) ? (
                <svg
                  fill="#ffffff"
                  height="18px"
                  width="18px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.42 512.42"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M509.313,67.45c-4.16-4.16-10.88-4.267-15.04-0.107L134.06,422.33l-115.2-121.6c-3.733-4.48-10.453-5.12-15.04-1.387 c-4.48,3.733-5.12,10.453-1.387,15.04c0.32,0.32,0.533,0.64,0.853,0.96l122.667,129.493c1.92,2.133,4.693,3.307,7.573,3.307h0.213 c2.773,0,5.44-1.067,7.467-3.093l368-362.667C513.473,78.33,513.473,71.61,509.313,67.45z" />{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
