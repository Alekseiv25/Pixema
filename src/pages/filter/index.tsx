import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LazyLoaderSvg from '../../assets/svg/LazyLoaderSvg'
import MovieCard from '../../components/movieCard'
import { loadMoviesByfilterAsyncAction } from '../../store/reducers/movies/actions'
import { filtermovieSelector, moviesSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const Filter = () => {
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
    const dispatch = useDispatch()
    const filter = useSelector(filtermovieSelector)
    const query = `sortField=${filter.sortBy}&sortType=-1&year=${filter.yearFilterFrom}-${filter.yearFilterTo}
                    ${filter.genre === '' ? '' : `${`&genres.name=${filter.genre}`}`}
                    &rating.kp=${filter.ratingFilterFrom}-${filter.ratingFilterTo}`
    const movies = useSelector(moviesSelector)
    useEffect(() => {
        dispatch(loadMoviesByfilterAsyncAction(query, limit))
    }, [dispatch, limit, query])

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

export default Filter