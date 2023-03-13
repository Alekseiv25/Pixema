import styles from './styles.module.scss'

interface IInputProps {
    type: string
    label?: string
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
        value,
        className } = props

    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            className={className}
        />
    )
}

export default Input