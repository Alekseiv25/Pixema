import FilterSvg from '../../../assets/svg/filter'
import styles from './styles.module.scss'

const FilterButton = () => {
    return (<button className={styles.filter_button}>
        <FilterSvg />
    </button>)
}

export default FilterButton