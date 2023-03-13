import BurgerButton from '../buttons/burgerButton'
import LogoButton from '../buttons/logoButton'
import SearchBar from './searchBar'
import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <BurgerButton />
            <LogoButton />
            <SearchBar />
        </header>
    )
}

export default Header