import Validator, { ValidationError } from 'fastest-validator'
import { FormEventHandler, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import LogoButton from '../../components/buttons/LogoButton'
import Input from '../../components/Input'
import Submit from '../../components/Submit'
import { resetPasswordAsyncAction } from '../../store/reducers/reset/actions'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const newPasswordValidationSchema = {
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

const NewPassword = () => {
    const [formError, setFormError] = useState<ValidationError[]>([])
    const navigate = useNavigate()
    const [massage, setMessage] = useState('')
    const theme = useSelector(changeThemeSelector)
    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const result = check(newPasswordValidationSchema, {
            password: e.currentTarget.password.value,
            confirmpassword: e.currentTarget.confirm_password.value
        })
        if (result === true) {
            const newPassword: string = e.currentTarget.password.value
            if (uid && token) {
                setMessage('Ваш пароль изменён')
                setTimeout(
                    dispatch(resetPasswordAsyncAction(uid, token, newPassword, () => navigate('/signin'))),
                    4000
                )
            }
        } else {
            setFormError(result as ValidationError[])
        }
    }

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form onSubmit={handleSubmit} className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}>
                <h2>Новый пароль</h2>
                <span>{massage}</span>
                <Input
                    type={'password'}
                    placeholder={'Введите новый пароль'}
                    name={'password'}
                    label={'Новый пароль'}
                />
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>
                        {err.message === `The 'password' field length must be greater than or equal to 8 characters long.`
                            ? 'Пароль должен быть от 8 символов' : ''
                                || err.message === `The 'password' field length must be less than or equal to 16 characters long.`
                                ? 'Пароль должен быть до 16 символов' : ''}
                    </span>
                ))}
                <Input
                    type={'password'}
                    label={'Подтверждение нового пароля'}
                    placeholder={'Подтвердите ваш новый пароль'}
                    name={'confirm_password'}
                />
                {formError.map(err => (
                    <span key={err.field} className={styles.errors}>
                        {err.message === `The 'confirmpassword' field value must be equal to 'password' field value.`
                            ? 'Пароли не совпадают' : ''}
                    </span>
                ))}
                <Submit value={'Установить пароль'} />
            </form>
        </>
    )
}

export default NewPassword