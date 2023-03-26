import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { loadRandomMovieAsyncAction } from "../../store/reducers/selectedMovieReducer/actions"
import { selectedMovieSelector } from "../../store/selectors/selectors"
import AgeRating from "../ageRating"
import Genres from "../genres"
import Rating from "../rating"
import styles from './styles.module.scss'

const BackgroundMovie = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRandomMovieAsyncAction())
    }, [dispatch])
    const movie = useSelector(selectedMovieSelector)


    // const [bgVideo, setBgVideo] = useState(
    //     localStorage.getItem("bgVideo") || ''
    // );
    // const [oldDate, setOldDate] = useState(
    //     localStorage.getItem("oldDate") || `${todayDate() - 1}`
    // );

    // useEffect(() => {
    //     if (oldDate !== `${todayDate()}`) {
    //         dispatch(loadRandomMovieAsyncAction())

    //         setBgVideo(JSON.stringify(movie))
    //         console.log(bgVideo)
    //         setOldDate(`${todayDate()}`);
    //     }
    //     localStorage.setItem("bgVideo", bgVideo);
    //     localStorage.setItem("oldDate", oldDate);
    // }, [bgVideo, oldDate, dispatch,]);



    return (
        <>
            <div className={styles.background_image_container} style={{ backgroundImage: movie.backdrop?.url ? `url(${movie.backdrop?.url})` : `url(${movie.poster?.url})` }}>
                <div className={styles.container_container}></div>
            </div>
            <div className={styles.background_info}>
                <h1>{movie.name}</h1>
                <div className={styles.background_description_block}>
                    <Rating rating={movie.rating} />
                    <div className={styles.year}>{movie.year}</div>
                    <Genres genres={movie.genres} />
                    <div className={styles.countries}>{movie.countries?.[0].name}</div>
                    <AgeRating ageRating={movie.ageRating} />
                </div>
                <div className={styles.background_description}>
                    {movie.description}
                </div>
                <div className={styles.background_buttons}>
                    <Link to={`/film/${movie.id}`}>Подробнее</Link>
                </div>
            </div>
        </>

    )
}
export default BackgroundMovie