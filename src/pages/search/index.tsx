import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import LazyLoaderSvg from '../../assets/svg/LazyLoaderSvg'
import MovieCard from '../../components/movieCard'
import { loadMoviesBySearchAsyncAction } from '../../store/reducers/movies/actions'
import { moviesSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const Search = () => {
    const [limit, setLimit] = useState(10)
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 1024) {
            setLimit(8)
            setCount(8)
        } else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 734) {
            setLimit(9)
            setCount(9)

        } else if (document.documentElement.clientWidth < 735) {
            setLimit(10)
            setCount(10)
        }
    }, [limit, count])
    const { name } = useParams()
    const dispatch = useDispatch()
    const movies = useSelector(moviesSelector)
    useEffect(() => {
        dispatch(loadMoviesBySearchAsyncAction(limit, name))
    }, [dispatch, limit, name])
    if (!movies.length) {
        return <LazyLoaderSvg />
    }
    return (
        <div className={styles.movies_container}>
            <div className={styles.movies_block}>
                {movies.map((item) => <MovieCard key={item.id} docs={item} />)}
            </div>
            <div className={styles.movies_footer}>
                {movies.length >= 8 && <button onClick={() => setLimit(limit + count)}>Показать ещё</button>}
            </div>
        </div>
    )
}

export default Search