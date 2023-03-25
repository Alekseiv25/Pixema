import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeThemeSelector } from '../../../store/selectors/selectors'
import FilterButton from '../../buttons/filterButton'
import SearchButton from '../../buttons/searchButton'
import styles from './styles.module.scss'

const SearchBar = () => {
    const theme = useSelector(changeThemeSelector)
    const navigate = useNavigate()
    const [searchText, setSearchText] = useState('')
    const onChange = (e: any) => {
        setSearchText(e.target.value)
    }

    const onClick = () => {
        navigate(`/search/${searchText}`,)
        setSearchText('')
    }

    return (
        <label className={theme ? `${styles.search} ${styles.light}` : `${styles.search}`}>
            <input
                type="search"
                name="search"
                placeholder='Фильмы и сериалы'
                value={searchText}
                onChange={onChange}
            />
            <SearchButton onClick={onClick} className={!searchText ? `${styles.disable}` : `${styles.button}`} />
            <FilterButton />
        </label>
    )
}

export default SearchBar