import { useNavigate } from 'react-router-dom'
import styles from './styles.module.scss'

const UserButton = () => {
    const navigate = useNavigate()

    return (
        <div onClick={() => { navigate('/signin') }} className={styles.user_container}>
            <button>AL</button>
            <span>Artem Lapitsky</span>
        </div>
    )
}

export default UserButton