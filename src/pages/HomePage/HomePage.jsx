import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import { CATALOG_ROUTE } from "../../constants/routes";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav_container}>
        <Button variant="contained" className={styles.button}>
          <NavLink to={CATALOG_ROUTE} className={styles.link}>
            Start Search
          </NavLink>
        </Button>
      </nav>
    </div>
  );
};

export default HomePage;
