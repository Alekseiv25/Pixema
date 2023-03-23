import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import MovieCard from '../components/movieCard'
import loadMoviesListAsyncAction from '../store/reducers/moviesReducer/actions'
import { moviesSelector } from '../store/selectors/selectors'
import styles from './styles.module.scss'

const Movies = () => {
    const dispatch = useDispatch()
    const movies = useSelector(moviesSelector)
    const [limit, setLimit] = useState(10)
    const [count, setCount] = useState(10);
    // useEffect(() => {
    //     if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 1024) {
    //         setLimit(8);
    //         setCount(8);
    //         console.log(document.documentElement.clientWidth);
    //         console.log(document.documentElement.clientWidth)
    //     } else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 734) {
    //         setLimit(9);
    //         setCount(9);
    //         console.log(document.documentElement.clientWidth);

    //     } else if (document.documentElement.clientWidth < 735) {
    //         setLimit(10);
    //         setCount(10);
    //         console.log(document.documentElement.clientWidth);
    //     }
    // }, [limit, count]);
    useEffect(() => {
        dispatch(loadMoviesListAsyncAction(limit))
    }, [limit, dispatch])

    return (
        <div className={styles.movies_container}>
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