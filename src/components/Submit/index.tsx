import styles from './styles.module.scss'

interface IProps {
    value: string
    onClick?: () => void
}
const Submit = (props: IProps) => {
    const { value, onClick } = props

    return (
        <input
            type="submit"
            onClick={onClick}
            value={value}
            className={styles.submit}
        />
    )
}

export default Submit