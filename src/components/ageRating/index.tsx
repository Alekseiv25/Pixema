import { IMovie } from "../../types/movieTypes"
import styles from './styles.module.scss'


const AgeRating = ({ ageRating }: IMovie) => {
    return (
        <div className={styles.age_container}>
            {ageRating && ageRating + '+'}
        </div>
    )
}

export default AgeRating