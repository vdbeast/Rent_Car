import { useSelector } from "react-redux"
import CatalogListItem from "../CatalogListItem/CatalogListItem"
import { selectCatalog } from "../../redux/selectors"
import styles from './CatalogList.module.css'

const CatalogList = () => {
    const cars = useSelector(selectCatalog);

    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {cars.map((car) => (
                    <CatalogListItem key={car.id} car={car} />  
                ))}
            </ul>
        </div>
    )
}

export default CatalogList