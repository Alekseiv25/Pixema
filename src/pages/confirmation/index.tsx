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
                    Please activate your account with the activation
                    link in the email <b>{email}</b>
                    Please, check your email
                </p>
                <Submit value={"Домой"} />
            </form>
        </>
    )
}

export default Confirmation