import styles from './RentalConditions.module.css'

const RentalConditions = ({ car }) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {car.rentalConditions.split("\n").map((condition, index) => (
                        <li key={index} className={styles.item}>{condition}</li>
                    ))}
            </ul>
            <ul className={styles.list}>
                <li className={styles.item}>Mileage: {car.mileage}</li>
                <li className={styles.item}>Price: {car.rentalPrice}</li>
            </ul>
        </div>
    )
}

export default RentalConditions;