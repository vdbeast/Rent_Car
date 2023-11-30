import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/api";
import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCars())
    }, [dispatch])

    return (
        <div>
            <p>Catalog Page</p>
            <CatalogList/>
        </div>
    )
}

export default CatalogPage;