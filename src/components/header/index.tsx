import { useLocation, useParams } from 'react-router-dom'
import BurgerMenu from '../burgerMenu'
import BurgerButton from '../buttons/burgerButton'
import LogoButton from '../buttons/logoButton'
import UserButton from '../buttons/userButton'
import SearchBar from './searchBar'
import styles from './styles.module.scss'

const Header = () => {
    const location = useLocation()
    const { uid, token } = useParams()

    return (
        < >
            <header className={
                location.pathname === '/signin' ||
                    location.pathname === '/signup' ||
                    location.pathname === '/reset' ||
                    location.pathname === '/newpassword' ||
                    location.pathname === 'activate/:uid/:token' ||
                    location.pathname === '/confirmation' ||
                    location.pathname === '/success' ||
                    location.pathname === `/password/reset/confirm/${uid}/${token}` ? `${styles.disable}` : `${styles.header}`}>
                <div className={styles.left_container}>
                    <BurgerButton />
                    <LogoButton />
                </div>
                <SearchBar />
                <UserButton />
            </header>
            <BurgerMenu />
        </ >
    )
}

export default Header