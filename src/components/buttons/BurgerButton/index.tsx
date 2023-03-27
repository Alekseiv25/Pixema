import useOutsideClick from '@rooks/use-outside-click'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { burgerMenuAction } from '../../../store/reducers/toggleBurger/actions'
import { toggleBurgerSelector } from '../../../store/selectors/selectors'
import styles from './styles.module.scss'

const BurgerButton = () => {
    const dispatch = useDispatch()
    const toggleBurger = () => {
        dispatch(burgerMenuAction())
    }
    const toggleBurgerAction = useSelector(toggleBurgerSelector)
    const ref: any = useRef<HTMLDivElement>(null);
    useOutsideClick(ref, () => (toggleBurgerAction ? toggleBurger() : undefined))
    
    return (
        <button ref={ref} className={toggleBurgerAction ? `${styles.burger_button} ${styles.active}` : `${styles.burger_button}`} onClick={toggleBurger} >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default BurgerButton