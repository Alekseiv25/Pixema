import { useNavigate } from 'react-router-dom'
import LogoButton from '../../components/buttons/LogoButton_'
import Submit from '../../components/Submit_'
import styles from './styles.module.scss'

const Success = () => {
    const navigate = useNavigate()

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form onSubmit={() => { navigate('/signin') }} className={styles.form_container}>
                <div>
                    <p>Почта подтверждена!</p>
                    <p>Регистрация прошла успешно.</p>
                </div>
                <Submit value={'Авторизироваться'} />
            </form>
        </>
    )
}

export default Success