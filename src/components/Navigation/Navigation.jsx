import { NavLink } from "react-router-dom";
import {
  CATALOG_ROUTE,
  FAVORITE_ROUTE,
  HOME_ROUTE,
} from "../../constants/routes";
import logo from "../../images/logo.png";
import styles from "./Navigation.module.css";
import { Button } from "@mui/material";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <NavLink to={HOME_ROUTE}>
        <img src={logo} alt="logo" />
      </NavLink>
      <ul className={styles.list}>
        <li>
          <Button variant="text" className={styles.btn}>
            <NavLink to={CATALOG_ROUTE} className={styles.link}>
              Search
            </NavLink>
          </Button>
        </li>
        <li>
          <Button variant="text" className={styles.btn}>
            <NavLink to={FAVORITE_ROUTE} className={styles.link}>
              Favorite
            </NavLink>
          </Button>    
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
