import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeThemeSelector, userSelector } from '../../../store/selectors/selectors'
import DropDownMenu from '../../dropDownMenu'
import styles from './styles.module.scss'

const UserButton = () => {
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    const theme = useSelector(changeThemeSelector)
    const user = useSelector(userSelector)
    const shortname = user?.username[0]
    const handleClick = () => {
        if (!user) {
            navigate('/signin')
        }
        else {
            setToggle(!toggle)
        }
    }


    return (
        <>
            <div
                onClick={handleClick}
                className={theme ? `${styles.user_container} ${styles.light}` : `${styles.user_container}`}>
                <button>{user ? `${shortname}` : 'В'}</button>
                <span>{user ? `${user.username}` : 'Войти'}</span>
            </div>
            <DropDownMenu active={toggle} />
        </>
    )
}

export default UserButton