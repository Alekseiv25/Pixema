import { Link } from 'react-router-dom'
import { IMoviePerson } from '../../../../types/movie'
import styles from './styles.module.scss'

interface PersonTabProps {
    item: IMoviePerson
}

const PersonTab = ({ item }: PersonTabProps) => {
    const { name, id, photo, description } = item

    return (
        <Link to={`/name/${id}`} className={styles.person}>
            <div
                style={{ backgroundImage: `url(${photo})` }}
                className={styles.person_photo}
            ></div>
            <div className={styles.person_description}>
                <h2 >
                    {name}
                </h2>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default PersonTab