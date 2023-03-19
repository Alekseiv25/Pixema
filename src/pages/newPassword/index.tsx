import { FormEventHandler, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {  useNavigate, useParams } from "react-router-dom"
import LogoButton from "../../components/buttons/logoButton"
import Input from "../../components/input"
import Submit from "../../components/submit"
import { resetPasswordAsyncAction } from "../../store/reducers/resetReducer/actions"
import { changeThemeSelector } from "../../store/selectors/selectors"
import styles from './styles.module.scss'
const NewPassword = () => {
    const navigate = useNavigate()
    const [massage, setMessage] = useState('')
    const theme = useSelector(changeThemeSelector)
    const { uid, token } = useParams()
    const dispatch = useDispatch()
    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const newPassword: string = e.currentTarget.password.value
        if (uid && token) {
            setMessage('Ваш пароль изменён')
            setTimeout(
                dispatch(resetPasswordAsyncAction(uid, token, newPassword, () => navigate('/signin'))),
                4000
            )
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
                <Input
                    type={'password'}
                    label={'Подтверждение нового пароля'}
                    placeholder={'Подтвердите ваш новый пароль'}
                    name={'confirm_password'}
                />
                <Submit value={"Установить пароль"} />
            </form>
        </>
    )
}

export default NewPassword