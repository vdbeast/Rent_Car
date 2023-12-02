import { Autocomplete, TextField } from "@mui/material";
import styles from "./Filter.module.css";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

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
    "Chrysler",
    "Kia",
    "Land",
    ];
    
    const optionsPrice = [
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90",
        "100",
        "110",
        "120",
        "130",
        "140",
        "150",
        "160",
        "170",
        "180",
        "190",
        "200"
    ];

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault(); 
    const carBrand = document.getElementById("model").value;
    // const price = document.getElementById("price").value;

    dispatch(setFilter(carBrand));
  };
  
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSearch}>
        <Autocomplete
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
