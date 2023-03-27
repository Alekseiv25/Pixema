import Validator, { ValidationError } from 'fastest-validator'
import { FormEventHandler, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoButton from '../../components/buttons/LogoButton_'
import Input from '../../components/Input_'
import Submit from '../../components/Submit_'
import { getUserAsyncAction } from '../../store/reducers/auth/actions'
import { authSelector, changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const signInValidationSchema = {
    email: {
        type: 'email',
        optional: true
    },
    password: {
        type: 'string',
        min: 8,
        max: 16,
        optional: true,
        nullable: true
    },
}

export const check = (schema: Object, data: Object) => {
    const validator = new Validator()
    const compiledValidator = validator.compile(schema)

    return compiledValidator(data)
}

const SignIn = () => {
    const theme = useSelector(changeThemeSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector(authSelector)
    const [formError, setFormError] = useState<ValidationError[]>([])
    const [apiErrors, setApiErrors] = useState('')
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const result = check(signInValidationSchema, {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
        })
        if (result === true) {
            setFormError([])
            const email: string = e.currentTarget.email.value
            const password: string = e.currentTarget.password.value
            dispatch(getUserAsyncAction(email, password, () => { navigate('/') }))
        } else {
            setFormError(result as ValidationError[])
        }
    }
    useEffect(() => {
        for (const key in auth.errors) {
            if (auth.errors === null) {
                setApiErrors('')
            } else {
                const errors: any = (auth.errors[key])
                if (errors === 'No active account found with the given credentials') {
                    setApiErrors('Неверный логин либо пароль')
                }
            }
        }
    }, [auth.errors, apiErrors])

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form
                onSubmit={handleSubmit}
                className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}
            >
                <h2>Авторизация</h2>
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
                <Input
                    type={'password'}
                    label={'Пароль'}
                    placeholder={'Введите ваш пароль'}
                    name={'password'}
                />
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>
                        {err.message === `The 'password' field length must be greater than or equal to 8 characters long.` ? 'Пароль должен быть от 8 символов' : `Пароль должен быть до 16 символов`}
                    </span>
                ))}
                <span className={styles.errors}>{apiErrors}</span>
                <NavLink className={styles.forgot_link} to={'/reset'}>Забыли пароль?</NavLink>
                <Submit value={'Войти'} />
                <p>Нет аккаунта? <NavLink to={'/signup'}>Зарегестрироваться</NavLink></p>
            </form>
        </>
    )
}

export default SignIn