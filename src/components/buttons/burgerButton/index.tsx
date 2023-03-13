import styles from './styles.module.scss'

const BurgerButton = () => {
    return (
        <button className={styles.burger_button}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default BurgerButton