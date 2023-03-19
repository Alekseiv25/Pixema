import { useLocation, useNavigate } from "react-router-dom"
import LogoButton from "../../components/buttons/logoButton"
import Submit from "../../components/submit"
import styles from './styles.module.scss'

const Confirmation = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const email = location.state

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form onSubmit={() => { navigate('/') }} className={styles.form_container}>
                <p>
                    Пожалуйста активируйте свой аккаунт по ссылке активации
                    на вашей почте <b>{email}</b><br/>
                    Пожалуйста, проверьте свою почту
                </p>
                <Submit value={"Домой"} />
            </form>
        </>
    )
}

export default Confirmation