import { useSelector } from 'react-redux'
import { toggleFilterSelector } from '../../store/selectors/selectors'
import CloseButton from '../buttons/closeButton'
import Input from '../input'
import Submit from '../submit'
import styles from './styles.module.scss'

const ModalFilter = () => {
    const toggleFilter = useSelector(toggleFilterSelector)
    return (
        <div className={toggleFilter ? `${styles.modal_container} ${styles.active}` : `${styles.modal_container}`}>
            <div className={toggleFilter ? `${styles.modal_content} ${styles.active}` : `${styles.modal_content}`}>
                <div className={styles.modal_header}>
                    <h2>Фильтр</h2>
                    <CloseButton />
                </div>
                <div className={styles.modal_main}>
                    <div className={styles.sort_by}>
                        <h3>Сортировать по</h3>
                        <div className={styles.sort_container}>
                            <button>Рейтинг</button>
                            <button>Год</button>
                        </div>
                    </div>
                    <div className={styles.modal_genres}>
                        <h3>Жанры</h3>
                    </div>
                    <div className={styles.modal_years}>
                        <h3>Годы</h3>
                        <div className={styles.modal_years_container}>
                            <Input type={'text'} label={''} placeholder={'From'} name={'fromyears'} />
                            <Input type={'text'} label={''} placeholder={'To'} name={'toyears'} />
                        </div>
                    </div>
                    <div className={styles.modal_rating}>
                        <h3>Рейтинг</h3>
                        <div className={styles.modal_rating_container}>
                            <Input type={'text'} label={''} placeholder={'From'} name={'fromrating'} />
                            <Input type={'text'} label={''} placeholder={'To'} name={'torating'} />
                        </div>
                    </div>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.clear_button}>Очистить фильтр</button>
                    <Submit value={'Показать результат'} />
                </div>
            </div>
        </div>
    )
}

export default ModalFilter
