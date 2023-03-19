import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useOutsideClick from "@rooks/use-outside-click";
import ArrowSvg from '../../../assets/svg/arrowSVG'
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
    const ref: any = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, () => setToggle(false))


    return (
        <div className={styles.user_block}>
            <div
                ref={ref}
                onClick={handleClick}
                className={theme ? `${styles.user_container} ${styles.light}` : `${styles.user_container}`}>
                <div className={styles.user_info}>
                    <button>{user ? `${shortname}` : 'В'}</button>
                    <span>{user ? `${user.username}` : 'Войти'}</span>
                </div>
                <ArrowSvg className={toggle ? `${styles.active_arrow}` : ''} />
            </div>
            <DropDownMenu active={toggle} />
        </div>
    )
}

export default UserButton