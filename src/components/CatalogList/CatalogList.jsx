import { useSelector } from "react-redux"
import CatalogListItem from "../CatalogListItem/CatalogListItem"
import { selectCatalog } from "../../redux/selectors"
import styles from './CatalogList.module.css'
import { useState } from "react"

const CatalogList = () => {
    const cars = useSelector(selectCatalog);
    const limit = 12;
    const [visibleCars, setVisibleCars] = useState(limit);

    const handleLoadMore = () => {
        setVisibleCars((prevVisibleCars)=> prevVisibleCars + limit)
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {cars.slice(0, visibleCars).map((car) => (
                    <CatalogListItem key={car.id} car={car} />  
                ))}
            </ul>
            {visibleCars < cars.length && (
                <button
                    className={styles.load_more_btn}
                    onClick={handleLoadMore}
                >
                    Load More
                </button>
            )}
        </div>
    )
}

export default CatalogList