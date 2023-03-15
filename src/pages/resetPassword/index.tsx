import LogoButton from '../../components/buttons/logoButton'
import Input from '../../components/input'
import Submit from '../../components/submit'
import styles from './styles.module.scss'

const ResetPassword = () => {
    return (
        <>
            <LogoButton className={styles.logo_button} />
            <form className={styles.form_container}>
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