import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.css";
import { CATALOG_ROUTE } from "../../constants/routes";
import { Button } from "@mui/material";
import About from "../../components/About/About";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <nav>
          <Button variant="contained" className={styles.button}>
            <NavLink to={CATALOG_ROUTE} className={styles.link}>
              Start Search
            </NavLink>
          </Button>
        </nav>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default HomePage;
