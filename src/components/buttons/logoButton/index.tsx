import Logo from '../../../assets/svg/logo'
import styles from './styles.module.scss'

const LogoButton = () => {
    return (
        <button className={styles.logo_button}>
            <Logo />
        </button>
    )
}

export default LogoButton