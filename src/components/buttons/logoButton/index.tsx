import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/svg/logo'
import { changeThemeSelector } from '../../../store/selectors/selectors'
import styles from './styles.module.scss'

interface IProps {
    className?: string
}

const LogoButton = (props: IProps) => {
    const { className } = props
    const navigate = useNavigate()
    const theme = useSelector(changeThemeSelector)

    return (
        <button onClick={() => navigate('/')} className={theme ?  `${className} ${styles.logo_button}   ${styles.light}`  : `${styles.logo_button} ${className}`}>
            <Logo />
        </button>
    )
}

export default LogoButton