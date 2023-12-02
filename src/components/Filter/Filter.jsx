import { Autocomplete, TextField } from "@mui/material";
import styles from "./Filter.module.css";

const Filter = () => {
  const optionsCar = [
    "Buick",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land",
    ];
    
    const optionsPrice = [
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        150,
        160,
        170,
        180,
        190,
        200
    ];

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <Autocomplete
          disablePortal
          id="model"
          options={optionsCar}
          sx={{ width: 300 }}
          renderInput={(optionsCar) => <TextField {...optionsCar} label="Car brand" placeholder="Enter the text"/>}
        />
        <Autocomplete
          id="price"
          options={optionsPrice}
          sx={{ width: 300 }}
          renderInput={(optionsPrice) => <TextField {...optionsPrice} label="Price/ 1 hour" placeholder="To $"/>}
        />
        <button className={styles.btn}>Search</button>
      </form>
    </div>
  );
};

export default Filter;
