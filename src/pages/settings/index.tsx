import { FormEventHandler } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/input'
import Submit from '../../components/submit'
import { patchUserAsyncAction } from '../../store/reducers/authReducer/actions'
import { ThemeColorAction } from '../../store/reducers/themeReducer/actions'
import { changeThemeSelector, userSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

const Settings = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const theme = useSelector(changeThemeSelector)
    const toggleTheme = () => {
        dispatch(ThemeColorAction())
    }
    const user = useSelector(userSelector)

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const name: string = e.currentTarget.username.value;
        dispatch(patchUserAsyncAction(name))
        console.log('Что-то происходит');
        console.log(name);

    }


    return (
        <>
            <div className={!theme ? `${styles.settings_container}` : `${styles.settings_container} ${styles.light}`}>
                <div className={!user ? `${styles.disable}` : ''}>
                    <h2 >Профиль</h2>
                    <form onSubmit={handleSubmit} className={styles.form_container}>
                        <div className={styles.input_container}>
                            <Input
                                type={'text'}
                                label={'Имя'}
                                placeholder={'Имя'}
                                name={'username'}
                                defaultValue={user?.username}
                            />
                        </div>
                        <div className={styles.input_container}>
                            <Input
                                type={'email'}
                                label={'Email'}
                                placeholder={'Почта'}
                                name={'email'}
                                defaultValue={user?.email}
                            />
                        </div>
                        <Submit value={'Сохранить'} />
                    </form>
                </div>
                <div className={!user ? `${styles.disable}` : ''}>
                    <h2>Пароль</h2>
                    <form className={styles.form_container}>
                        <div className={styles.input_container}>
                            <Input
                                type={'password'}
                                label={'Пароль'}
                                placeholder={'Ваш пароль'}
                                name={'oldpassword'}
                            />
                        </div>
                        <div className={`${styles.new_password_container} ${styles.input_container}`}>
                            <Input
                                type={'password'}
                                label={'Новый пароль'}
                                placeholder={'Новый пароль'}
                                name={'newpassword'}
                            />
                            <Input
                                type={'password'}
                                label={'Подтверждение пароля'}
                                placeholder={'Подтверждение пароля'}
                                name={'confirmpassword'}
                            />
                        </div>
                    </form>
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
                        <label htmlFor="toggle"></label>
                    </div>
                </div>
                <div className={styles.settings_footer}>
                    <button onClick={() => navigate('/')} className={styles.cancel_button}>Закрыть</button>

                </div>
            </div>
        </>
    )
}

export default Settings