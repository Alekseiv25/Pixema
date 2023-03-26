import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { LazyLoaderSvg } from "../../assets/svg/lazyLoaderSVG"

import AgeRating from "../../components/ageRating"
import FavoriteButton from "../../components/buttons/favoriteButton"
import Facts from "../../components/facts"
import Genres from "../../components/genres"
import Rating from "../../components/rating"
import Tabs from "../../components/tabs"
import TabsLayout from "../../components/tabs/tabsLayout"
import Time from "../../components/time"
import { getRandomInt } from "../../helpers/getRandomInt"
import loadSelectedMovieAsyncAction from "../../store/reducers/selectedMovieReducer/actions"
import { changeThemeSelector, selectedMovieSelector } from "../../store/selectors/selectors"
import { IMovie, IMoviePerson, IMovieSimilar } from "../../types/movieTypes"
import styles from './styles.module.scss'

export const SelectedMovie = () => {
    const { id } = useParams()
    const theme = useSelector(changeThemeSelector)
    const movie = useSelector(selectedMovieSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadSelectedMovieAsyncAction(id))
    }, [id, dispatch])

    const person = (value: string) => {
        return movie.persons?.filter((item: IMoviePerson) =>
            item.enProfession === value ? item.name : undefined
        );
    };

    const items = [
        {
            title: "Год производства",
            value: movie.year,
            condition: movie.year,
        },
        {
            title: "Премьера в мире",
            value: movie.premiere?.world,
            condition: movie.premiere?.world,
        },
        {
            title: "Бюджет",
            value: `${movie.budget?.value}`,
            condition: movie.budget?.value,
        },
        {
            title: "Сборы в мире",
            value: `${movie.fees?.world?.value}`,
            condition: movie.fees?.world?.value
        },
        {
            title: "Страна",
            value: movie.countries?.map((el) => <p key={el.name}>{el.name}</p>),
            condition: movie.countries?.length
        },
        { title: "Слоган", value: `«${movie.slogan}»`, condition: movie.slogan },
        {
            title: "Время",
            value: `${movie.movieLength} минут`,
            condition: movie.movieLength
        },
        {
            title: "Возраст",
            value: <AgeRating ageRating={movie.ageRating} />,
            condition: movie.ageRating,
        },
        {
            title: "Режиссер",
            value: movie.persons?.[0]?.name,
            condition: movie.persons?.[0]?.name,
        },
        {
            title: "Продюссер",
            value: person("producer")?.map((i) => (
                <p key={i.name + getRandomInt(0, 500)}>{i.name}</p>
            )),
            condition: person("producer"),
        },
        {
            title: "Художник",
            value: person("design")?.map((i) => (
                <p key={i.name + getRandomInt(0, 500)}>{i.name}</p>
            )),
            condition: person("design"),
        },
        {
            title: "Монтаж",
            value: person("editor")?.map((i) => (
                <p key={i.name + getRandomInt(0, 500)}>{i.name}</p>
            )),
            condition: person("editor"),
        },
    ];



    const roles = movie.persons?.filter((item: IMoviePerson) =>
        item.enProfession === "actor" && item.name?.length ? item : undefined
    );
    const similars = movie.similarMovies?.filter((item: IMovieSimilar) =>
        item.name?.length ? item : undefined
    );
    const sequels = movie.sequelsAndPrequels?.filter((item: IMovie) =>
        item.name?.length ? item : undefined
    );
    const tabs = [
        {
            txt: `Похожие ${(movie.typeNumber === 1 && "фильмы") ||
                (movie.typeNumber === 2 && "сериалы") ||
                ((movie.typeNumber === 3 || movie.typeNumber === 5) && "мультфильмы")
                }`,
            content: (
                <TabsLayout
                    similars={similars}
                    title={`Похожие ${(movie.typeNumber === 1 && "фильмы") ||
                        (movie.typeNumber === 2 && "сериалы") ||
                        ((movie.typeNumber === 3 || movie.typeNumber === 5) && "мультфильмы")
                        } (${similars?.length})`}
                />
            ),
            condition: similars?.length,
        },
        {
            txt: "Актёры",
            content: <TabsLayout roles={roles} title={`Актёры (${roles?.length})`} />,
            condition: roles?.length,
        },
        {
            txt: "Сиквелы и приквелы",
            content: (
                <TabsLayout
                    sequels={sequels}
                    title={`Сиквелы и приквелы (${sequels?.length})`}
                />
            ),
            condition: sequels?.length,
        },
        {
            txt: "Факты",
            content: <Facts facts={movie.facts} />,
            condition: movie.facts?.length,
        },
    ];

    if (!movie.id) {
        return <LazyLoaderSvg />
    }


    return (
        <div className={theme ? `${styles.movie_container} ${styles.light}` : `${styles.movie_container}`}>
            <div className={styles.content}>
                <div className={styles.left_container}>
                    <div className={styles.img_container}>
                        <img src={movie.poster?.url} alt="movie poster" />
                    </div>
                    <div className={styles.buttons_group}>
                        <FavoriteButton movie={movie} />
                    </div>
                </div>
                <div className={styles.top_container}>
                    <div className={styles.genres_container}>
                        <Genres genres={movie.genres} />
                    </div>
                    <h1 className={styles.movie_name}>{movie.name ? movie.name : movie.enName}</h1>
                    <h2 className={styles.movie_altname}>{movie.alternativeName}</h2>
                    <div className={styles.movie_markers}>
                        <Rating rating={movie.rating} />
                        <Time movieLength={movie.movieLength} />
                        <AgeRating ageRating={movie.ageRating} />
                    </div>
                    <div className={styles.info_container}>
                        <p className={styles.movie_description}>
                            {movie.description}
                        </p>
                        <div className={styles.column_description}>
                            {items.map(
                                (item) =>
                                    item.condition && (
                                        <div
                                            className={styles.column_description_block}
                                            key={item.title}
                                        >
                                            <p className={styles.column_title}>{item.title}</p>
                                            <p className={styles.column_description_content}
                                            >
                                                {item.value}
                                            </p>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom_container}>
                <Tabs tabs={tabs} />
            </div>
        </div>
    )
}

export default SelectedMovie