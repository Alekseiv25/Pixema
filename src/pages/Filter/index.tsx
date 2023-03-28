import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard'
import { movieTypes } from '../../constants/constants'
import { loadMoviesByfilterAsyncAction } from '../../store/reducers/movies/actions'
import { filtermovieSelector, moviesSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const Filter = () => {
    const [limit, setLimit] = useState(10)
    const [count, setCount] = useState(10)
    const [sortType, setSortType] = useState('-1')
    const [sortTypeName, setSortTypeName] = useState('убыванию')
    const [activeUl, setActiveUl] = useState(false)
    const [movieType, setMovieType] = useState('')
    useEffect(() => {
        if (document.documentElement.clientWidth <= 1366 && document.documentElement.clientWidth > 1024) {
            setLimit(8)
            setCount(8)
        } else if (document.documentElement.clientWidth <= 1024 && document.documentElement.clientWidth > 734) {
            setLimit(9)
            setCount(9)

        } else {
            setLimit(10)
            setCount(10)
        }
    }, [])

    const dispatch = useDispatch()
    const filter = useSelector(filtermovieSelector)
    const query = `sortField=${filter.sortBy}&sortType=${sortType}&year=${filter.yearFilterFrom}-${filter.yearFilterTo}${filter.genre !== '' ? `${`&genres.name=${filter.genre}`}` : ''}&rating.kp=${filter.ratingFilterFrom}-${filter.ratingFilterTo}${movieType !== '' ? `${`&type=${movieType}`}` : ''}`
    const movies = useSelector(moviesSelector)
    useEffect(() => {
        dispatch(loadMoviesByfilterAsyncAction(query, limit))
    }, [dispatch, limit, query])



    const handleSort = () => {
        if (sortType === '-1') {
            setSortType('1')
            setSortTypeName('возрастанию')
        } else {
            setSortTypeName('убыванию')
            setSortType('-1')
        }
    }

    return (
        <div className={styles.movies_container}>
            <div className={styles.movies_buttons}>
                <button onClick={handleSort} >Сортировать по: {sortTypeName}</button>
                <ul className={activeUl ? `${styles.active_ul}` : ''} >
                    <label onClick={() => { setActiveUl(!activeUl) }}>Выбрать жанр</label>
                    {movieTypes.map((el) => (
                        <li className={movieType === el.value ? `${styles.ulgenre} ${styles.active}` : `${styles.ulgenre}`} key={el.label} onClick={() => setMovieType(el.value)}>
                            {el.label}
                        </li>
                    ))}
                </ul>
            </div>
            {!movies.length ? <><h1 className={styles.notfound}>Нет фильмов по вашему запросу</h1></>
                : <div className={styles.movies_block}>
                    {movies.map((item) => <MovieCard key={item.id} docs={item} />)}
                </div>}
            <div className={styles.movies_footer}>
                {movies.length >= 8 && <button onClick={() => setLimit(limit + count)}>Показать ещё</button>}
            </div>
        </div >
    )
}

export default Filter