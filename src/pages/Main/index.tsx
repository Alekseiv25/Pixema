import Movies from '../../components/Movies'
import styles from './styles.module.scss'

const Main = () => {
    return (
        <div className={styles.movies_wrapper}>
            <Movies />
        </div>
    )
}

export default Main