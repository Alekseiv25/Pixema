import SearchIcoSvg from "../../../assets/svg/searchIcoSVG"
import styles from './styles.module.scss'

interface ISearchButtonProps {
    className: string,
    onClick: () => void
}

const SearchButton = (props: ISearchButtonProps) => {
    const { className, onClick } = props
    return (
        <button onClick={onClick} className={`${className} ${styles.search_button}`} >
            <SearchIcoSvg />
        </button>
    )
}

export default SearchButton