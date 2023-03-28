import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import MovieCard from '../../components/MovieCard'
import { movieTypes } from '../../constants/constants'
import { loadMoviesBySearchAsyncAction } from '../../store/reducers/movies/actions'
import { moviesSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const Search = () => {
    const [limit, setLimit] = useState(10)
    const [count, setCount] = useState(10)
    const [movieType, setMovieType] = useState('')
    const [activeUl, setActiveUl] = useState(false)
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
    const query = `search=${name}&field=name${movieType !== '' ? `${`&type=${movieType}`}` : ''}`

    useEffect(() => {
        dispatch(loadMoviesBySearchAsyncAction(limit, query))
    }, [dispatch, limit, query])


    return (
        <div className={styles.movies_container}>
            <div className={styles.movies_buttons}>
                <ul className={activeUl ? `${styles.active_ul}` : ''} >
                    <label onClick={() => { setActiveUl(!activeUl) }}>Выбрать жанр</label>
                    {movieTypes.map((el) => (
                        <li className={movieType === el.value ? `${styles.ulgenre} ${styles.active}` : `${styles.ulgenre}`} key={el.label} onClick={() => setMovieType(el.value)}>
                            {el.label}
                        </li>
                    ))}
                </ul>
            </div>
            {!movies.length ? <h1 className={styles.notfound}>Нет фильмов по вашему запросу</h1>
                : <div className={styles.movies_block}>
                    {movies.map((item) => <MovieCard key={item.id} docs={item} />)}
                </div>}
            <div className={styles.movies_footer}>
                {movies.length >= 8 && <button onClick={() => setLimit(limit + count)}>Показать ещё</button>}
            </div>
        </div>
    )
}

export default Search