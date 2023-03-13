import styles from './styles.module.scss'

const UserButton = () => {
    return (
        <div className={styles.user_container}>
            <button>AL</button>
            <span>Artem Lapitsky</span>
        </div>
    )
}

export default UserButton