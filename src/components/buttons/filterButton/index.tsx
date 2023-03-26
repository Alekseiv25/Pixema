import { useDispatch } from 'react-redux'
import FilterSvg from '../../../assets/svg/filter'
import { toggleFilterAction } from '../../../store/reducers/toggleFilter/reducer'
import styles from './styles.module.scss'

const FilterButton = () => {
    const dispatch = useDispatch()
    const toggleFilter = () => {
        dispatch(toggleFilterAction())
    }

    return (<button onClick={toggleFilter} className={styles.filter_button}>
        <FilterSvg />
    </button>)
}

export default FilterButton