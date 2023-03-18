import { FormEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/input'
import Submit from '../../components/submit'
import { registerUserAsyncAction } from '../../store/reducers/registerReducer/actions'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const SignUp = () => {
    const theme = useSelector(changeThemeSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const name: string = e.currentTarget.username.value;
        const email: string = e.currentTarget.email.value;
        const password: string = e.currentTarget.password.value;
        dispatch(
            registerUserAsyncAction(
                name,
                email,
                password,
                () => navigate('/confirmation', { state: email })
            )
        )

    }

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form onSubmit={handleSubmit} className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}>
                <h2>Регистрация</h2>
                <Input
                    type={'text'}
                    label={'Имя'}
                    placeholder={'Введите ваше имя'}
                    name={'username'}
                />
                <Input
                    type={'email'}
                    label={'Email'}
                    placeholder={'Введите ваш email'}
                    name={'email'}
                />
                <Input
                    type={'password'}
                    label={'Пароль'}
                    placeholder={'Введите ваш пароль'}
                    name={'password'}
                />
                <Input
                    type={'password'}
                    label={'Подтверждение пароля'}
                    placeholder={'Подтвердите ваш пароль'}
                    name={'password'}
                />
                <Submit value={'Зарегестрироваться'} />
                <p>Есть аккаунт? <NavLink to={'/signin'}>Авторизоваться</NavLink></p>
            </form>
        </>
    )
}

export default SignUp