import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import MovieCard from '../movieCard'
import loadMoviesListAsyncAction from '../../store/reducers/moviesReducer/actions'
import { changeThemeSelector, moviesSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'
import { LazyLoaderSvg } from '../../assets/svg/lazyLoaderSVG'

const Movies = () => {
    const dispatch = useDispatch()
    const theme = useSelector(changeThemeSelector)
    const movies = useSelector(moviesSelector)
    const [limit, setLimit] = useState(10)
    const [count, setCount] = useState(10);
    // const count = 10
    useEffect(() => {
        if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 1024) {
            setLimit(8);
            setCount(8);
        } else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 734) {
            setLimit(9);
            setCount(9);

        } else if (document.documentElement.clientWidth < 735) {
            setLimit(10);
            setCount(10);
        }
    }, [limit, count]);
    useEffect(() => {
        dispatch(loadMoviesListAsyncAction(limit))
    }, [limit, dispatch])
    if (!movies.length) {
        return <LazyLoaderSvg />
    }
    return (
        <div className={theme ? `${styles.movies_container} ${styles.light}` : `${styles.movies_container}`}>
            <h1>Новые фильмы и сериалы</h1>
            <div className={styles.movies_block}>
                {movies.map((item) => <MovieCard key={item.id} docs={item} />)}
            </div>
            <div className={styles.movies_footer}>
                <button onClick={() => setLimit(limit + count)}>Показать ещё</button>
            </div>
        </div>
    )
}

export default Movies