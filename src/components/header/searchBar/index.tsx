import FilterButton from '../../buttons/filterButton'
import styles from './styles.module.scss'

const SearchBar = () => {
    return (
        <label className={styles.search}>
            <input type="search" name="search" placeholder='Фильмы и сериалы' />
            <FilterButton />
        </label>
    )
}

export default SearchBar