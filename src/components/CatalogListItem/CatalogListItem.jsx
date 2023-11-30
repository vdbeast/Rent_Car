import React, { useState } from "react";
import styles from "./CatalogListItem.module.css"
import CatalogModalCard from "../CatalogModalCard/CatalogModalCard";

const CatalogListItem = ({ car }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleOpenModal = () => {
        setIsShowModal((prev)=>!prev)
    }
    
    return (
        <li className={styles.item}>
            <div className={styles.container}>
                <div className={styles.main_wrapper}>
                    <img src={car.img} alt="car photo" className={styles.img} />
                    <div>
                        <div className={styles.title_wrapper}>
                            <h3 className={styles.title}>{car.make}&nbsp;{car.model},&nbsp;{car.year}</h3>
                            <p className={styles.price_desc}>{car.rentalPrice}</p>
                        </div>
                        <p className={styles.car_desc}>{car.address} | {car.rentalCompany}</p>
                        <p className={styles.car_desc}>{car.type} | {car.model} | {car.id}</p>
                    </div>
                </div>
                <button className={styles.learn_btn} onClick={handleOpenModal}>Learn More</button>
            </div>
            {isShowModal && (
                <div>
                    <CatalogModalCard car={car}/>
                </div>
            )}
        </li>
    )
}

export default CatalogListItem