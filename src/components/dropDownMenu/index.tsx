import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOutAction } from '../../store/reducers/auth/actions'
import styles from './styles.module.scss'

interface IProps {
    active: boolean
}

const DropDownMenu = (props: IProps) => {
    const { active } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(signOutAction())
    }

    return (
        <div className={active === true ? `${styles.active} ${styles.dropdown_container}` : `${styles.dropdown_container}`}>
            <button onClick={() => { navigate('/settings') }}>Изменить профиль</button>
            <hr />
            <button onClick={handleLogOut} >Выход</button>
        </div>
    )
}

export default DropDownMenu