import { ReactNode, useRef } from 'react'
import SwiperClass, { Navigation } from 'swiper'
import { Swiper } from 'swiper/react'
import SliderButton from '../buttons/SliderButton_'
import './swiper.scss'

const breakpoints = {
    320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 30,
    },
    730: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 30,
    },
    769: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 30,
    },
    1025: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 30,
    },
    1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30,
    },
}

interface ISlider {
    children: ReactNode
    title?: string
}

const Slider = ({ children, title }: ISlider) => {
    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)

    const navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }

    const onSwiper = (swiper: SwiperClass) => {
        // @ts-ignore
        swiper.params.navigation.prevEl = navigationPrevRef.current
        // @ts-ignore
        swiper.params.navigation.nextEl = navigationNextRef.current

        //   Re-init navigation
        swiper.navigation.destroy()
        swiper.navigation.init()
        swiper.navigation.update()
    }
    return (
        <>
            <div
                className='sttabs_layout__title_block'
            >
                <h2 >{title}</h2>
                <div className='swiper-buttons'>
                    <SliderButton dir='left' ref={navigationPrevRef} />
                    <SliderButton dir='right' ref={navigationNextRef} />
                </div>
            </div>
            <Swiper
                className='swiper-wrapper'
                modules={[Navigation]}
                slidesPerView={2}
                slidesPerGroup={2}
                spaceBetween={15}
                navigation={navigation}
                onSwiper={onSwiper}
                breakpoints={breakpoints}
            >
                {children}
            </Swiper>
        </>
    )
}

export default Slider