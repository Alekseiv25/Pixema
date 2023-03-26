import Movies from "../../components/movies"
import styles from './styles.module.scss'
const Main = () => {
    return (
            <div className={styles.movies_wrapper}>
                <Movies />
            </div>
    )
}

export default Main