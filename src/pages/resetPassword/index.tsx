import { FormEventHandler, useState } from 'react'
import { useSelector } from 'react-redux'
import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/input'
import Submit from '../../components/submit'
import { fetchResetPassword } from '../../services/user/userService'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const theme = useSelector(changeThemeSelector)
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const email: string = e.currentTarget.email.value
        fetchResetPassword(email)
        setEmail(`Письмо с ссылкой на восстановление пароля отправлено на вашу почту ${email}`)
    }


    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form onSubmit={handleSubmit} className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}>
                <h2>Сбросить пароль</h2>
                <span>{email}</span>
                <Input
                    type={'email'}
                    placeholder={'Введите вашу почту'}
                    name={'email'}
                    label={'Почта'}
                />
                <Submit value={'Сбросить'} />
            </form>
        </>
    )
}

export default ResetPassword