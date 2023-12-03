import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";
import styles from './FavoritePage.module.css'

const FavoritePage = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCars(favorites);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Filter />
      </div>
      <div>
        <ul className={styles.list}>
          {favoriteCars.map((car) => (
            <CatalogListItem key={car.id} car={car}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritePage;
