import { useSelector } from "react-redux";
import CatalogListItem from "../CatalogListItem/CatalogListItem";
import { selectCatalog, selectFilter } from "../../redux/selectors";
import styles from "./CatalogList.module.css";
import { useState } from "react";
import Filter from "../Filter/Filter";
import { Button } from "@mui/material";

const CatalogList = () => {
  const cars = useSelector(selectCatalog);
  const filter = useSelector(selectFilter);
  const limit = 12;
  const [visibleCars, setVisibleCars] = useState(limit);

  const handleLoadMore = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + limit);
  };

  const filteredContacts = cars.filter((car) =>
    car.make.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <div>
        <Filter />
      </div>
      <div>
        <ul className={styles.list}>
          {filteredContacts.slice(0, visibleCars).map((car) => (
            <CatalogListItem key={car.id} car={car} />
          ))}
        </ul>
        {visibleCars < cars.length && (
          <Button className={styles.load_more_btn} onClick={handleLoadMore}>
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default CatalogList;
