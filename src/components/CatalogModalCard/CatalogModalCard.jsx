import { useEffect } from "react";
import styles from "./CatalogModalCard.module.css";
import RentalConditions from "../RentalConditions/RentalConditions";
import { Button } from "@mui/material";

const CatalogModalCard = ({ car, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onCloseModal();
      }
    };

    const handleClickOutside = (event) => {
      const modal = document.querySelector(`.${styles.container}`);
      if (modal && !modal.contains(event.target)) {
        onCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onCloseModal]);
  return (
    <div className={styles.overlay}>
      <div className={styles.modal_container}>
        <div className={styles.container}>
          <button
            className={styles.close_btn}
            onClick={() => {
              onCloseModal();
            }}
          >
            X
          </button>
          <div className={styles.img_wrapper}>
            <img src={car.img} alt="car img" className={styles.img} />
          </div>
          <div className={styles.text_container}>
            <h2 className={styles.title}>
              {car.make}&nbsp;{car.model},&nbsp;{car.year}
            </h2>
            <div className={styles.desc_wrapper}>
              <p className={styles.car_desc}>
                {car.address} | Id:{car.id} | Year:{car.year} | Type:{car.type}
              </p>
              <p className={styles.car_desc}>
                Fuel consumption:{car.fuelConsumption} | Engine size:
                {car.engineSize}
              </p>
            </div>
            <p className={styles.main_car_description}>{car.description}</p>
            <div>
              <h3 className={styles.subtitle}>
                Accessories and functionalities:
              </h3>
              <div className={styles.first_desc_wrapper}>
                <ul className={styles.car_desc_list}>
                  {car.accessories.map((accessory, id) => (
                    <li className={styles.car_desc_item} key={id}>
                      {accessory}
                    </li>
                  ))}
                </ul>
                <ul className={styles.car_desc_list}>
                  {car.functionalities.map((functionality, id) => (
                    <li className={styles.car_desc_item} key={id}>
                      {functionality}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className={styles.subtitle}>Rental Conditions: </h3>
              <RentalConditions car={car} />
            </div>
          </div>
          <Button
            className={styles.rent_btn}
            onClick={() => (window.location.href = "tel:+380730000000")}
          >
            Rental Car
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CatalogModalCard;
