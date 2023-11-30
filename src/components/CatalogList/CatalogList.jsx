import { useSelector } from "react-redux"
import CatalogListItem from "../CatalogListItem/CatalogListItem"
import { selectCatalog } from "../../redux/selectors"

const CatalogList = () => {
    const cars = useSelector(selectCatalog);

    return (
        <div>
            <ul>
                {cars.map((car) => (
                    <CatalogListItem key={car.id} car={car} />  
                ))}
            </ul>
        </div>
    )
}

export default CatalogList