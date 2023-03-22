import { Link } from "react-router-dom"
import { IMovieProps } from "../../types/movieTypes"
import Genres from "../genres"
import Rating from "../rating"
import styles from './styles.module.scss'

const MovieCard = ({ docs }: IMovieProps) => {
    return (
        <div className={styles.movie_card}>
            <Rating rating={docs?.rating} />
            <Link to={`film/${docs?.id}`}>
                <div
                    className={styles.movie_poster}
                    style={{ backgroundImage: `url(${docs?.poster?.url})` }}
                >
                </div>
                <div className={styles.movie_description}>
                    <h2>{docs?.name}</h2>
                    <div className={styles.movie_footer}>
                        <Genres genres={docs?.genres} />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard