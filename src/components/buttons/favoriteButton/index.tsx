import FavoritesSvg from '../../../assets/svg/favoritesSVG'
import styles from './styles.module.scss'

interface IFavoriteButton {
    id: string | undefined
}

const FavoriteButton = (props: IFavoriteButton) => {
    const { id } = props
    return (
        <button onClick={() => { }} className={styles.favbutton}>
            <FavoritesSvg />
            Буду смотреть
        </button>
    )
}

export default FavoriteButton