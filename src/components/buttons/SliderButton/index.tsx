import { forwardRef } from "react"
import SliderArrowSvg from "../../../assets/svg/SliderArrowSvg_";
import styles from './styles.module.scss'
interface SliderBtnProps {
    dir: "left" | "right";
}

const SliderButton = forwardRef<HTMLButtonElement, SliderBtnProps>(
    (props, ref) => {
        const { dir } = props
        return (
            <button className={dir === 'left' ? `${styles.left_arrow} ${styles.arrow}` : `${styles.arrow}`} ref={ref}>
                <SliderArrowSvg />
            </button>
        );
    }
);
export default SliderButton;
SliderButton.displayName = "SliderButton";