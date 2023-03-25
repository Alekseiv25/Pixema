import { useSelector } from 'react-redux'
import MovieCard from '../../components/movieCard'
import { favoritesMoviesSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const Favorites = () => {
    const favoritesMovies = useSelector(favoritesMoviesSelector)

    return (
        <div className={styles.movies_container}>
            <h1>Избранное</h1>
            <div className={styles.movies_block}>
                {favoritesMovies.map((item) => <MovieCard key={item.id} docs={item} />)}
            </div>
        </div>
    )
}

export default Favorites