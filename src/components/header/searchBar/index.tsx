import FilterSvg from '../../../assets/svg/filter'
import FilterButton from '../../buttons/filterButton'
import styles from './styles.module.scss'

const SearchBar = () => {
    return (
        <label className={styles.search}>
            <input type="search" name="search" />
            <FilterButton />
        </label>
    )
}

export default SearchBar