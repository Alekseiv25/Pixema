import { useSelector } from 'react-redux'
import { changeThemeSelector } from '../../store/selectors/selectors'
import styles from './styles.module.scss'

interface IInputProps {
    type: string
    label: string
    placeholder: string
    name: string
    value?: string
    className?: string
}

const Input = (props: IInputProps) => {
    const {
        type,
        label,
        placeholder,
        name,
    } = props
    const theme = useSelector(changeThemeSelector)

    return (
        <div className={theme ? `${styles.input_container} ${styles.light}` : `${styles.input_container}`}>
            <span className={styles.label}>{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={styles.input}
            />
        </div>
    )
}

export default Input