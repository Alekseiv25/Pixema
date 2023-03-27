import { IMovie } from '../../types/movie'
import styles from './styles.module.scss'

const Time = ({ movieLength }: IMovie) => {
    return (
        <div className={styles.time_container}>
            {movieLength && movieLength + 'min'}
        </div>
    )
}

export default Time