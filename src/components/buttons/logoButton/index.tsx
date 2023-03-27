import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/svg/logo'
import { changeThemeSelector, toggleBurgerSelector } from '../../../store/selectors/selectors'
import styles from './styles.module.scss'

interface IProps {
    className?: string
}

const LogoButton = (props: IProps) => {
    const { className } = props
    const location = useLocation()
    const navigate = useNavigate()
    const theme = useSelector(changeThemeSelector)
    const burger = useSelector(toggleBurgerSelector)

    return (
        <button onClick={() => navigate('/')} className={(theme ? `${className} ${styles.logo_button} ${location.pathname !== '/' && !burger ? `${styles.light}` : ''}` : `${styles.logo_button} ${className}`)}>
            <Logo />
        </button>
    )
}

export default LogoButton