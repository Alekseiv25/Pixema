import { NavLink } from 'react-router-dom'
import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/input'
import Submit from '../../components/submit'
import styles from './styles.module.scss'

const SignUp = () => {
    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form className={styles.form_container}>
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