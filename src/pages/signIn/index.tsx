import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/input'
import Submit from '../../components/submit'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const SignIn = () => {
    const theme = useSelector(changeThemeSelector)

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}>
                <h2>Авторизация</h2>
                <Input
                    type={'email'}
                    placeholder={'Введите вашу почту'}
                    name={'email'}
                    label={'Почта'}
                />
                <Input
                    type={'password'}
                    label={'Пароль'}
                    placeholder={'Введите ваш пароль'}
                    name={'password'}
                />
                <NavLink className={styles.forgot_link} to={'/reset'}>Забыли пароль?</NavLink>
                <Submit value={'Войти'} />
                <p>Нет аккаунта? <NavLink to={'/signup'}>Зарегестрироваться</NavLink></p>
            </form>
        </>
    )
}

export default SignIn