import BurgerMenu from '../burgerMenu'
import BurgerButton from '../buttons/burgerButton'
import LogoButton from '../buttons/logoButton'
import UserButton from '../buttons/userButton'
import SearchBar from './searchBar'
import styles from './styles.module.scss'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left_container}>
                    <BurgerButton />
                    <LogoButton />
                </div>
                <SearchBar />
                <UserButton />
            </header>
            <BurgerMenu />
        </>
    )
}

export default Header