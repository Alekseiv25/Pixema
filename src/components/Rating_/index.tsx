import { IMovie } from '../../types/movie'
import styles from './styles.module.scss'

const Rating = ({ rating }: IMovie) => {
    const rate = `${rating?.kp}`.split('')
    return (
        <div
            className={`${styles.rating} ${(rating?.kp! >= 7 && `${styles.rating_green}`)
                || (rating?.kp! <= 5 && `${styles.rating_red}`)}`}>
            {rating?.kp && rate[0] + (rate[1] || '.') + (rate[2] || '0')}
        </div>
    )
}

export default Rating