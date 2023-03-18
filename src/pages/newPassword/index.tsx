import { useSelector } from "react-redux"
import LogoButton from "../../components/buttons/logoButton"
import Input from "../../components/input"
import Submit from "../../components/submit"
import { changeThemeSelector } from "../../store/selectors/selectors"
import styles from './styles.module.scss'
const NewPassword = () => {
const theme = useSelector(changeThemeSelector)

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}>
                <h2>Новый пароль</h2>
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