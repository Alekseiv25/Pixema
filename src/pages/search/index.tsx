import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieCard from '../../components/movieCard';
import { loadMoviesBySearchAsyncAction } from '../../store/reducers/moviesReducer/actions';
import { moviesSelector } from '../../store/selectors/selectors';
import styles from './styles.module.scss'

const Search = () => {
    const [limit, setLimit] = useState(10)
    // const count = 10
    const { name } = useParams()
    const dispatch = useDispatch()
    const movies = useSelector(moviesSelector)
    useEffect(() => {
        dispatch(loadMoviesBySearchAsyncAction(limit, name))
    }, [dispatch, limit, name])

    return (
        <div className={styles.movies_container}>
            <div className={styles.movies_block}>
                {movies.map((item) => <MovieCard key={item.id} docs={item} />)}
            </div>
            <div className={styles.movies_footer}>
                {movies.length >= 10 && <button onClick={() => setLimit(limit + 10)}>Показать ещё</button>}
            </div>
        </div>
    )
}

export default Search