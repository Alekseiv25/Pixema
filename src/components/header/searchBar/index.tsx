import { useSelector } from 'react-redux'
import { changeThemeSelector } from '../../../store/selectors/selectors'
import FilterButton from '../../buttons/filterButton'
import styles from './styles.module.scss'

const SearchBar = () => {
    const theme = useSelector(changeThemeSelector)

    return (
        <label className={theme ? `${styles.search} ${styles.light}` : `${styles.search}`}>
            <input type="search" name="search" placeholder='Фильмы и сериалы' />
            <FilterButton />
        </label>
    )
}

export default SearchBar