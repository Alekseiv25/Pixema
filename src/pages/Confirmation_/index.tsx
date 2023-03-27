import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import LogoButton from '../../components/buttons/LogoButton_'
import Submit from '../../components/Submit_'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const Confirmation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const email = location.state
    const theme = useSelector(changeThemeSelector)

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form onSubmit={() => { navigate('/') }} className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}>
                <p>
                    Пожалуйста активируйте свой аккаунт по ссылке активации
                    на вашей почте <b>{email}</b><br />
                    Пожалуйста, проверьте свою почту
                </p>
                <Submit value={'Домой'} />
            </form>
        </>
    )
}

export default Confirmation