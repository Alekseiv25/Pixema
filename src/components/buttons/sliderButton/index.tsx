import { forwardRef } from "react"
import SliderArrowSVG from "../../../assets/svg/sliderArrowSVG";
import styles from './styles.module.scss'
interface SliderBtnProps {
    dir: "left" | "right";
}

const SliderButton = forwardRef<HTMLButtonElement, SliderBtnProps>(
    (props, ref) => {
        const { dir } = props
        return (
            <button className={dir === 'left' ? `${styles.left_arrow} ${styles.arrow}` : `${styles.arrow}`} ref={ref}>
                <SliderArrowSVG />
            </button>
        );
    }
);
export default SliderButton;
SliderButton.displayName = "SliderButton";