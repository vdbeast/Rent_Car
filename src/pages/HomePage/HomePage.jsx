import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css';
import { CATALOG_ROUTE } from '../../constants/routes';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav_container}>
                <button className={styles.button}>
                    <NavLink to={ CATALOG_ROUTE }>Start Search</NavLink>
                </button>
            </nav>
        </div>
    )
}

export default HomePage;