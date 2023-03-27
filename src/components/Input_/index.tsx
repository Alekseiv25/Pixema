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
    defaultValue?: string
    onChange?: any
}

const Input = (props: IInputProps) => {
    const {
        type,
        label,
        placeholder,
        name,
        defaultValue,
        value,
        onChange
    } = props
    const theme = useSelector(changeThemeSelector)

    return (
        <div className={theme ? `${styles.input_container} ${styles.light}` : `${styles.input_container}`}>
            <span className={styles.label}>{label}</span>
            <input
                defaultValue={defaultValue}
                type={type}
                placeholder={placeholder}
                name={name}
                className={styles.input}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input