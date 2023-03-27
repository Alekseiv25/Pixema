import { SwiperSlide } from 'swiper/react'
import { IMovie, IMoviePerson, IMovieSimilar } from '../../../types/movie'
import MovieCard from '../../movieCard'
import Slider from '../../Slider'
import PersonTab from './PersonTab'
import styles from './styles.module.scss'

interface ITabsLayout {
    roles?: IMoviePerson[] | undefined
    similars?: IMovieSimilar[] | undefined
    personMovies?: IMovie[] | undefined
    sequels?: IMovie[] | undefined
    title?: string
}

const TabsLayout = ({ roles, sequels, similars, title, personMovies }: ITabsLayout) => {
    return (
        <div className={styles.tabs_layout}>
            <Slider title={title}>
                {roles &&
                    roles?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <PersonTab item={item} />
                            </SwiperSlide>
                        )
                    })}
                {similars &&
                    similars?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <MovieCard docs={item} key={item.id} />
                            </SwiperSlide>
                        )
                    })}
                {personMovies &&
                    personMovies?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <MovieCard docs={item} key={item.id} />
                            </SwiperSlide>
                        )
                    })}
                {sequels &&
                    sequels?.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <MovieCard docs={item} key={item.id} />
                            </SwiperSlide>
                        )
                    })}
            </Slider>
        </div>
    )
}

export default TabsLayout