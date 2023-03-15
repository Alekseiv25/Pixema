import styles from './styles.module.scss'

interface IProps {
    value: string
}
const Submit = (props: IProps) => {
const {value} = props

    return (
        <input type="submit" value={value} className={styles.submit} />
    )
}

export default Submit