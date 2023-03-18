import styles from './styles.module.scss'

interface IProps {
    active: boolean
}

const DropDownMenu = (props: IProps) => {
    const { active } = props

    return (
        <div className={active === true ? `${styles.active} ${styles.dropdown_container}` : `${styles.dropdown_container}`}>
            <button>Выход</button>
        </div>
    )
}

export default DropDownMenu