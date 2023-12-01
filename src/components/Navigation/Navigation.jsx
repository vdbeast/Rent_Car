import { NavLink } from 'react-router-dom'
import { CATALOG_ROUTE, FAVORITE_ROUTE } from '../../constants/routes'
import logo from '../../images/logo.png'
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" />
            <ul className={styles.list}>
                <li>
                    <button className={styles.btn}>
                        <NavLink to={ CATALOG_ROUTE } className={styles.link}>Search</NavLink>
                    </button>
                </li>
                <li>
                    <button className={styles.btn}>
                        <NavLink to={ FAVORITE_ROUTE } className={styles.link}>Favorite</NavLink>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Navigation