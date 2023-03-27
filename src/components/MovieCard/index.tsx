import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { changeThemeSelector, favoritesMoviesSelector } from "../../store/selectors/selectors"
import { IMovieProps } from "../../types/movie"
import SmallFavoriteButton from "../buttons/SmallFavoriteButton"
import Genres from "../Genres"
import Rating from "../Rating"
import styles from './styles.module.scss'

const MovieCard = ({ docs }: IMovieProps) => {
    const theme = useSelector(changeThemeSelector)
    const favoritemovies = useSelector(favoritesMoviesSelector)
    const isFavoritePost = (favoriteMoviesId: number | undefined) => {
        return favoritemovies.find((movie) => movie.id === favoriteMoviesId);
    };

    return (
        <div className={theme ? `${styles.movie_card} ${styles.light}` : `${styles.movie_card}`}>
            <div className={styles.movie_makers}>
                <Rating rating={docs?.rating} />
                {isFavoritePost(docs?.id) && <SmallFavoriteButton movie={docs!} />}
            </div>
            <Link to={`/film/${docs?.id}`}>
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