import Validator, { ValidationError } from 'fastest-validator'
import { FormEventHandler, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Submit from '../../components/Submit'
import { patchEmailAsyncAction, patchPasswordAsyncAction, patchUserAsyncAction } from '../../store/reducers/auth/actions'
import { ThemeColorAction } from '../../store/reducers/theme/actions'
import { authSelector, changeThemeSelector, userSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const settingsValidationSchema = {
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
    oldpassword: {
        type: 'string',
        min: 8,
        max: 16,
        optional: true,
        nullable: true
    },
    newpassword: {
        type: 'string',
        min: 8,
        max: 16,
        optional: true,
        nullable: true
    },
    confirmpassword: {
        type: 'equal',
        field: 'newpassword',
        optional: true,
        nullable: true
    }
}

export const check = (schema: Object, data: Object) => {
    const validator = new Validator()
    const compiledValidator = validator.compile(schema)

    return compiledValidator(data)
}

const Settings = () => {
    const auth = useSelector(authSelector)
    const [formNameError, setFormNameError] = useState<ValidationError[]>([])
    const [formEmailError, setFormEmailError] = useState<ValidationError[]>([])
    const [formPasswordError, setFormPasswordError] = useState<ValidationError[]>([])
    const [nameError, setNameError] = useState('')
    const [nameSuccess, setNameSuccess] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailSuccess, setEmailSuccess] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordSuccess, setPasswordSuccess] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = useSelector(changeThemeSelector)
    const toggleTheme = () => {
        dispatch(ThemeColorAction())
    }
    const user = useSelector(userSelector)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const name: string = e.currentTarget.username.value
        const email: string = e.currentTarget.email.value
        const oldpassword: string = e.currentTarget.oldpassword.value
        const newpassword: string = e.currentTarget.newpassword.value
        const changeNameResult = check(settingsValidationSchema, {
            name: e.currentTarget.username.value,
        })
        const changeEmailResult = check(settingsValidationSchema, {
            email: e.currentTarget.email.value,
            oldpassword: e.currentTarget.oldpassword.value
        })
        const changePasswordResult = check(settingsValidationSchema, {
            oldpassword: e.currentTarget.oldpassword.value,
            newpassword: e.currentTarget.newpassword.value,
            confirmpassword: e.currentTarget.confirmpassword.value
        })

        if (changeNameResult === true) {
            setFormNameError([])
            if (user?.username === name) {
                setNameError('Вы хотите поменять своё же имя')
            } else {
                dispatch(patchUserAsyncAction(name, () => setNameSuccess('Имя изменено!')))
                setNameError('')
                console.log(auth.errors)
            }
        } else {
            setFormNameError(changeNameResult as ValidationError[])
        }

        if (oldpassword === '') {
            return
        } else if (changeEmailResult === true && oldpassword) {
            if (email === user?.email) {
                setEmailError('Вы хотите поменять свою же почту')
            } else {
                dispatch(patchEmailAsyncAction(oldpassword, email, () => setEmailSuccess('Почта изменена!')))
                setEmailError('')
            }
        } else {
            setFormEmailError(changeEmailResult as ValidationError[])
        }

        if (newpassword === '') {
            return
        } else if (changePasswordResult === true && newpassword) {
            if (oldpassword === newpassword) {
                setPasswordError('Вы хотите поменять свой же пароль')
            } else {
                dispatch(patchPasswordAsyncAction(newpassword, oldpassword, () => setPasswordSuccess('Пароль изменен!')))
                setPasswordError('')
            }
        } else {
            setFormPasswordError(changePasswordResult as ValidationError[])
        }
    }
    useEffect(() => {
        for (const key in auth.errors) {
            if (key === 'username') {
                const userNameErr: any = (auth.errors[key])
                if (userNameErr) {
                    setNameError('Пользователь с этим именем уже существует')
                } else { setNameError('') }
            } else if (key === 'new_email') {
                const userEmailErr: any = (auth.errors[key])
                if (userEmailErr) {
                    setEmailError('Пользователь с этой почтой уже существует')
                } else { setEmailError('') }
            } else if (key === 'current_password') {
                const userPasswordErr: any = (auth.errors[key])
                if (userPasswordErr) {
                    setPasswordError('Неправильный пароль')
                } else { setPasswordError('') }
            }
        }
    }, [auth.errors, nameError, emailError, passwordError])
    return (
        <>
            <form onSubmit={handleSubmit} className={!theme ? `${styles.settings_container}` : `${styles.settings_container} ${styles.light}`}>
                <div className={!user ? `${styles.disable}` : ''}>
                    <h2 >Профиль</h2>
                    <div className={styles.form_container}>
                        <div className={styles.input_container}>
                            <Input
                                type={'text'}
                                label={'Имя'}
                                placeholder={'Имя'}
                                name={'username'}
                                defaultValue={user?.username}
                            />
                            {formNameError.map(err => (
                                <span key={err.field} className={styles.errors}>
                                    {err.message === `The 'name' field length must be greater than or equal to 3 characters long.` ? 'Имя должно содержать хотя бы 3 символа' : ''}
                                </span>
                            ))}
                            <span className={styles.errors}>{nameError}</span>
                            <span className={styles.success}>{nameSuccess}</span>
                        </div>
                        <div className={styles.input_container}>
                            <Input
                                type={'email'}
                                label={'Email'}
                                placeholder={'Почта'}
                                name={'email'}
                                defaultValue={user?.email}
                            />
                            {formEmailError.map(err => (
                                <span key={err.field} className={styles.errors}>
                                    {err.message === `The 'email' field must not be empty.` ? 'Поле почты не должны быть пустое' : ''}
                                </span>
                            ))}
                            <span className={styles.errors}>{emailError}</span>
                            <span className={styles.success}>{emailSuccess}</span>
                        </div>
                    </div>
                </div>
                <div className={!user ? `${styles.disable}` : ''}>
                    <h2>Пароль</h2>
                    <div className={styles.form_container}>
                        <div className={styles.input_container}>
                            <Input
                                type={'password'}
                                label={'Пароль'}
                                placeholder={'Ваш пароль'}
                                name={'oldpassword'}
                            />
                            <span className={styles.errors}>{passwordError}</span>
                            {formEmailError.map(err => (
                                <span key={err.field} className={styles.errors}>
                                    {err.message === `The 'oldpassword' field length must be greater than or equal to 8 characters long.` ? 'Пароль должен быть от 8 символов' : ''
                                        || err.message === `The 'oldpassword' field length must be less than or equal to 16 characters long.` ? 'Пароль должен быть до 16 символов' : ''}
                                </span>
                            ))}
                            {formPasswordError.map(err => (
                                <span key={err.field} className={styles.errors}>
                                    {err.message === `The 'oldpassword' field length must be greater than or equal to 8 characters long.` ? 'Пароль должен быть от 8 символов' : ''
                                        || err.message === `The 'oldpassword' field length must be less than or equal to 16 characters long.` ? 'Пароль должен быть до 16 символов' : ''}
                                </span>
                            ))}
                            <span className={styles.success}>{passwordSuccess}</span>
                        </div>
                        <div className={`${styles.new_password_container} ${styles.input_container}`}>
                            <Input
                                type={'password'}
                                label={'Новый пароль'}
                                placeholder={'Новый пароль'}
                                name={'newpassword'}
                            />
                            {formPasswordError.map(err => (
                                <span key={err.field} className={styles.errors}>
                                    {err.field === 'newpassword' ? 'Пароль должен быть от 8 символов' : ''
                                        || err.field === 'newpassword' ? 'Пароль должен быть до 16 символов' : ''}
                                </span>
                            ))}
                            <Input
                                type={'password'}
                                label={'Подтверждение пароля'}
                                placeholder={'Подтверждение пароля'}
                                name={'confirmpassword'}
                            />
                            {formPasswordError.map(err => (
                                <span key={err.field} className={styles.errors}>
                                    {err.message === `The 'confirmpassword' field value must be equal to 'newpassword' field value.` ? 'Пароли не совпадают' : ''}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <h2>Тема</h2>
                <div className={styles.theme_container}>
                    <div className={styles.theme_description}>
                        <p>Тёмная тема</p>
                        <p>Используется тёмная тема</p>
                    </div>
                    <div className={styles.switch_container}>
                        <input
                            id='toggle'
                            className={`${styles.theme_toggle} ${styles.theme_toggle_round}`}
                            type='checkbox'
                            checked={!theme}
                            onChange={toggleTheme}
                        />
                        <label htmlFor='toggle'></label>
                    </div>
                </div>
                <div className={styles.settings_footer}>
                    <button onClick={() => navigate('/')} className={styles.cancel_button}>Закрыть</button>
                    <Submit value={'Сохранить'} />
                </div>
            </form>
        </>
    )
}

export default Settings