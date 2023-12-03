import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/api";
import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import CatalogListItem from "../../components/CatalogListItem/CatalogListItem";

const FavoritePage = () => {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteCars(favorites);
  }, [dispatch]);

  return (
    <div>
      <div>
        <Filter />
      </div>
      <div>
        <ul>
          {favoriteCars.map((car) => (
            <CatalogListItem key={car.id} car={car} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavoritePage;
