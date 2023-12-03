import React, { useEffect, useState } from "react";
import styles from "./CatalogListItem.module.css";
import CatalogModalCard from "../CatalogModalCard/CatalogModalCard";
import { Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CatalogListItem = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpenModal = () => {
    setIsShowModal((prev) => !prev);
  };

    useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isCarFavorite = favorites.some((favorite) => favorite.id === car.id);
    setIsFavorite(isCarFavorite);
  }, [car.id]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = isFavorite
      ? favorites.filter((favorite) => favorite.id !== car.id)
      : [...favorites, car];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <div className={styles.main_wrapper}>
          <div className={styles.img_wrapper}>
            <img src={car.img} alt="car" className={styles.img} />
            <IconButton onClick={handleToggleFavorite} className={styles.favorite_btn}>
              {isFavorite ? <FavoriteIcon className={styles.favorite_icon} /> : <FavoriteBorderIcon className={styles.favorite_non_icon} />}
            </IconButton>
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
        <Button className={styles.learn_btn} onClick={handleOpenModal}>
          Learn More
        </Button>
      </div>
      {isShowModal && (
        <CatalogModalCard car={car} onCloseModal={handleOpenModal} />
      )}
    </li>
  );
};

export default CatalogListItem;
