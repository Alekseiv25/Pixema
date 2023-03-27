import Validator, { ValidationError } from 'fastest-validator'
import { FormEventHandler, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/Input'
import Submit from '../../components/Submit'
import { registerUserAsyncAction } from '../../store/reducers/register/actions'
import { changeThemeSelector, registerSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const signUpValidationSchema = {
    name: {
        type: 'string',
        min: 3,
        max: 48,
        optional: true
    },
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
    confirmpassword: {
        type: 'equal',
        field: 'password',
        optional: true,
        nullable: true
    }
}

export const check = (schema: Object, data: Object) => {
    const validator = new Validator()
    const compiledValidator = validator.compile(schema)

    return compiledValidator(data)
}

const SignUp = () => {
    const theme = useSelector(changeThemeSelector)
    const register = useSelector(registerSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nameApiError, setNameApiError] = useState('')
    const [emailApiError, setEmailApiError] = useState('')
    const [formError, setFormError] = useState<ValidationError[]>([])
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const result = check(signUpValidationSchema, {
            name: e.currentTarget.username.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            confirmpassword: e.currentTarget.confirm_password.value
        })
        if (result === true) {
            setFormError([])
            const name: string = e.currentTarget.username.value
            const email: string = e.currentTarget.email.value
            const password: string = e.currentTarget.password.value

            dispatch(
                registerUserAsyncAction(
                    name,
                    email,
                    password,
                    () => navigate('/confirmation', { state: email })
                )
            )
        } else {
            setFormError(result as ValidationError[])
        }
    }
    useEffect(() => {
        for (const key in register.errors) {
            if (key === 'username') {
                const userNameErr: any = (register.errors[key])
                if (userNameErr) {
                    setNameApiError('Пользователь с этим именем уже существует')
                } else { setNameApiError('') }
            } else if (key === 'email') {
                const userEmailErr: any = (register.errors[key])
                console.log(userEmailErr)
                if (userEmailErr) {
                    setEmailApiError('Пользователь с этой почтой уже существует')
                } else { setEmailApiError('') }
            }
        }
    }, [register.errors, nameApiError, emailApiError,])

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
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>
                        {err.message === `The 'name' field length must be greater than or equal to 3 characters long.` ? 'Имя должно содержать хотя бы 3 символа' : ''}
                    </span>
                ))}
                <span className={styles.errors}>{nameApiError}</span>
                <Input
                    type={'email'}
                    label={'Email'}
                    placeholder={'Введите ваш email'}
                    name={'email'}
                />
                <span className={styles.errors}>{emailApiError}</span>
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
                        {err.message === `The 'password' field length must be greater than or equal to 8 characters long.` ? 'Пароль должен быть от 8 символов' : ''
                            || err.message === `The 'password' field length must be less than or equal to 16 characters long.` ? 'Пароль должен быть до 16 символов' : ''}
                    </span>
                ))}
                <Input
                    type={'password'}
                    label={'Подтверждение пароля'}
                    placeholder={'Подтвердите ваш пароль'}
                    name={'confirm_password'}
                />
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>
                        {err.message === `The 'confirmpassword' field value must be equal to 'password' field value.` ? 'Пароли не совпадают' : ''}
                    </span>
                ))}
                <Submit value={'Зарегестрироваться'} />
                <p>Есть аккаунт? <NavLink to={'/signin'}>Авторизоваться</NavLink></p>
            </form>
        </>
    )
}

export default SignUp