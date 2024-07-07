import React, { useContext, useState } from "react";
import styles from "./Menu.module.scss";
import CardMenu from "../../components/Menu/CardMenu/CardMenu";
import AppContext from "../../context";

export default function Menu({ onAddToCart }) {
  const { items, cartItems, isLoading } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const renderMenu = () => {
    return (
      isLoading
        ? [...Array(10)]
        : items.filter((menu) =>
            menu.title.toLowerCase().includes(searchValue.toLowerCase())
          )
    ).map((menu, index) => {
      if (isLoading) {
        return <CardMenu key={index} loading={isLoading} />;
      }
      if (!menu) return null;
      return (
        <CardMenu
          key={menu.id}
          id={menu.id}
          prodId={menu.prodId}
          title={menu.title}
          subtitle={menu.subtitle}
          imageUrl={menu.imageUrl}
          price={menu.price}
          checked={cartItems.some((obj) => obj.title === menu.title)}
          onAdd={() => onAddToCart(menu)}
          loading={isLoading}
        />
      );
    });
  };
  return (
    <>
      <section className={styles.menu}>
        <div className={styles.title}>
          <h2>
            <span>Menu</span>
          </h2>
          <div className={styles.search}>
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              type="text"
              placeholder="Search..."
            ></input>
            {searchValue && (
              <img
                className={styles.clear}
                width={20}
                src="Icons/X.svg"
                alt="Close"
                onClick={() => setSearchValue("")}
              />
            )}
          </div>
        </div>

        <div className={styles.row}>{renderMenu()}</div>
      </section>
    </>
  );
}
