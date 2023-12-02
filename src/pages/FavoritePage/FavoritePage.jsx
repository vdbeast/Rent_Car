import { useDispatch, useSelector } from "react-redux";
import { updateFavoriteItem } from "../../redux/api";
import { useEffect } from "react";
import { selectCatalogFavorite } from "../../redux/selectors";

const FavoritePage = () => {
    const favoriteCar = useSelector(selectCatalogFavorite)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateFavoriteItem())
    }, [dispatch])

    return (
        <div>
            <ul>
                {favoriteCar.map((car) => (
                    <li key={car.id}>{car.id}</li>
                ))}
            </ul>
        </div>
    );
}

export default FavoritePage;