import Validator, { ValidationError } from 'fastest-validator'
import { FormEventHandler, useState } from 'react'
import { useSelector } from 'react-redux'
import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/input'
import Submit from '../../components/submit'
import { fetchResetPassword } from '../../services/user/userService'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const resetValidationSchema = {
    email: { type: 'email' },
}

export const check = (schema: Object, data: Object) => {
    const validator = new Validator()
    const compiledValidator = validator.compile(schema)

    return compiledValidator(data)
}

const ResetPassword = () => {
    const [formError, setFormError] = useState<ValidationError[]>([])
    const [email, setEmail] = useState('')
    const theme = useSelector(changeThemeSelector)
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const result = check(resetValidationSchema, {
            email: e.currentTarget.email.value,
        })
        if (result === true) {
            setFormError([])
            const email: string = e.currentTarget.email.value
            fetchResetPassword(email)
            setEmail(`Письмо с ссылкой на восстановление пароля отправлено на вашу почту ${email}`)
        } else {
            setFormError(result as ValidationError[])
        }
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
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>
                        {err.message === `The 'email' field must not be empty.` ? 'Поле почты не должны быть пустое' : ''}
                    </span>
                ))}
                <Submit value={'Сбросить'} />
            </form>
        </>
    )
}

export default ResetPassword