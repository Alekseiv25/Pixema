import { useSelector } from 'react-redux'
import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/input'
import Submit from '../../components/submit'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const ResetPassword = () => {
    const theme = useSelector(changeThemeSelector)

    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form className={theme ? `${styles.form_container} ${styles.light}` : `${styles.form_container}`}>
                <h2>Сбросить пароль</h2>
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