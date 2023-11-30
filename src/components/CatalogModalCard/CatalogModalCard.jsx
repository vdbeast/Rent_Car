import { useEffect } from 'react'
import styles from './CatalogModalCard.module.css'

const CatalogModalCard = ({ car, onCloseModal }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.code === "Escape") {
                onCloseModal()
            }
        }
    
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
                    <button className={styles.close_btn} onClick={() => { onCloseModal() }}>X</button>
                    <img src={car.img} alt="car img" className={styles.img}/>
                </div>
            </div>
        </div>
    )
}

export default CatalogModalCard