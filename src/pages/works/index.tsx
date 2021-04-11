import styles from './index.module.scss'
import {Carousel} from 'antd'
import {useMemo} from "react";

/**
 * 渲染的carousel的数据接口
 */
interface CarouselListState {
    /**
     * 图片地址
     */
    img: string
    /**
     * 标题
     */
    title: string
    /**
     * 内容文本
     */
    body: string
}


const carouselListState: CarouselListState[] = [
    {
        img: "/img/网页作品2_09.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    },
    {
        img: "/img/网页作品2_09.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    },
    {
        img: "/img/网页作品2_09.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    },
    {
        img: "/img/网页作品2_11.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    },
    {
        img: "/img/网页作品2_11.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    },
    {
        img: "/img/网页作品2_11.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    },
    {
        img: "/img/网页作品2_13.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    },
    {
        img: "/img/网页作品2_13.png",
        title: "Card title",
        body: "Some quick example text to build on the card ！！ Some quick example text to build on the card"
    }
]
const Works = () => {
    const carouselList = useMemo(() => {
        let render;
        const _render: CarouselListState[][] = [];
        for (let i = 0; i < Math.ceil(carouselListState.length / 3); i++) {
            _render.push(carouselListState.slice(i * 3, (i + 1) * 3))
        }

        render = _render.map((x, key1) => {
            return (
                <div className={styles['slide-item']} key={key1}>
                    {x.map((j, key2) => <div className={styles.item} key={key2}>
                        <img className={styles['item-img']} src={j.img} alt="" width="100%" height="100%"/>
                        <h5>{j.title}</h5>
                        <p>{j.body}</p>
                    </div>)}
                </div>
            )
        })
        return render
    }, [carouselListState]);
    return (
        <section className={styles["page-works"]}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>ART APPRECIATION</h1>
                    <h4>作品欣赏</h4>
                </div>
                <div className={styles["slide-wrapper"]}>
                    <div className={styles['slide-context']}>
                        <img src="./img/pc-l.png" alt="" width={58} height={58} className={`${styles["icon-image"]} ${styles.right}`}/>
                        <div className={styles["slide-title"]}>
                            <span className={styles.explain}>网页</span>
                            <span className={styles.num}>01</span>
                        </div>
                        <div className={styles.slide}>
                            <Carousel autoplay={false}
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
                    </div>

                    <div className={`${styles['slide-context']}`}>
                        <img src="./img/pen.png" alt="" width={58} height={58} className={`${styles["icon-image"]} ${styles.left}`}/>
                        <div className={`${styles["slide-title"]} ${styles.right}`}>
                            <span className={styles.explain}>摄影</span>
                            <span className={styles.num}>02</span>
                        </div>
                        <div className={styles.slide}>
                            <Carousel autoplay={false}
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;