import { useLocation } from 'react-router-dom'
import BurgerMenu from '../burgerMenu'
import BurgerButton from '../buttons/burgerButton'
import LogoButton from '../buttons/logoButton'
import UserButton from '../buttons/userButton'
import SearchBar from './searchBar'
import styles from './styles.module.scss'

const Header = () => {
    const location = useLocation()

    return (
        <section className={
            location.pathname === '/signin' ||
                location.pathname === '/signup' ||
                location.pathname === '/reset' ? `${styles.disable}` : `${styles.active}`}>
            <header className={styles.header}>
                <div className={styles.left_container}>
                    <BurgerButton />
                    <LogoButton />
                </div>
                <SearchBar />
                <UserButton />
            </header>
            <BurgerMenu />
        </section>
    )
}

export default Header