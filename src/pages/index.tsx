import styles from './index.module.scss'
import {Carousel} from 'antd';
import {useMemo} from "react";

interface CarouselConfig {
    src: string
    alt: string
}

/**
 * 轮播图配置
 */
const carouselConfig: CarouselConfig[] = [
    {
        src: "/img/网页作品2_02.png",
        alt: "/img/网页作品2_02.png"
    },
    {
        src: "/img/网页作品2_25.png",
        alt: "/img/网页作品2_25.png"
    },
    {
        src: "/img/网页作品2_27.png",
        alt: "/img/网页作品2_27.png"
    },
    {
        src: "/img/网页作品2_09.png",
        alt: "/img/网页作品2_09.png"
    }
]

const Home = () => {
    const carouselList = useMemo(() => {
        return carouselConfig.map((item, key) =>
            <div className={styles["carousel-item"]} key={key}>
                <img src={item.src} alt={item.alt} width="100%" height="100%"/>
            </div>
        )
    }, [carouselConfig])
    return (
        <div className={styles.home}>
            <Carousel
                autoplay
                      className={styles.carousel}
                      draggable
                      lazyLoad="ondemand"
                      pauseOnDotsHover
                      accessibility
                      adaptiveHeight
                      arrows
                      focusOnSelect
            >
                {carouselList}
            </Carousel>
        </div>
    )
}
export default Home