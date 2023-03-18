import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeThemeSelector } from '../../../store/selectors/selectors'
import styles from './styles.module.scss'

const UserButton = () => {
    const navigate = useNavigate()
    const theme = useSelector(changeThemeSelector)

    return (
        <div
            onClick={() => { navigate('/signin') }}
            className={theme ? `${styles.user_container} ${styles.light}` : `${styles.user_container}`}>
            <button>AL</button>
            <span>Artem Lapitsky</span>
        </div>
    )
}

export default UserButton