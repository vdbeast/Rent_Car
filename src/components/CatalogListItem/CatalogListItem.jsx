import React, { useState } from "react";
import styles from "./CatalogListItem.module.css";
import CatalogModalCard from "../CatalogModalCard/CatalogModalCard";

const CatalogListItem = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleOpenModal = () => {
    setIsShowModal((prev) => !prev);
  };

  const handleAddToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((favorite) => favorite.id === car.id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== car.id,
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, { id: car.id }];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <div className={styles.main_wrapper}>
          <div className={styles.img_wrapper}>
            <img src={car.img} alt="car" className={styles.img} />
            <button onClick={handleAddToFavorite}>x</button>
          </div>
          <div>
            <div className={styles.title_wrapper}>
              <h3 className={styles.title}>
                {car.make}&nbsp;{car.model},&nbsp;{car.year}
              </h3>
              <p className={styles.price_desc}>{car.rentalPrice}</p>
            </div>
            <div className={styles.desc_wrapper}>
              <p className={styles.car_desc}>
                {car.address} | {car.rentalCompany}
              </p>
              <p className={styles.car_desc}>
                {car.type} | {car.model} | {car.id}
              </p>
            </div>
          </div>
        </div>
        <button className={styles.learn_btn} onClick={handleOpenModal}>
          Learn More
        </button>
      </div>
      {isShowModal && (
        <CatalogModalCard car={car} onCloseModal={handleOpenModal} />
      )}
    </li>
  );
};

export default CatalogListItem;
