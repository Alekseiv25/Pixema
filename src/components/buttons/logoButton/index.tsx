import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/svg/logo'
import styles from './styles.module.scss'

interface IProps {
    className?: string
}

const LogoButton = (props: IProps) => {
    const {className} = props
    const navigate = useNavigate()

    return (
        <button  onClick={() => navigate('/')} className={`${styles.logo_button} ${className}` }>
            <Logo />
        </button>
    )
}

export default LogoButton