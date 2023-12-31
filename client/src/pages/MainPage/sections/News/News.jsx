import styles from "./News.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import { ArrowLeftIcon, ArrowRightIcon, NewsImage, SectionHeading } from "../../../../shared";

const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
        <button className={`${styles.sliderButton} ${styles.sliderButton_prev}`} onClick={() => swiper.slidePrev()}>
            <ArrowLeftIcon className={`${styles.sliderButtonIcon} ${styles.sliderButtonIcon_prev}`} />
        </button>
    );
};

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
        <button className={`${styles.sliderButton} ${styles.sliderButton_next}`} onClick={() => swiper.slideNext()}>
            <ArrowRightIcon className={`${styles.sliderButtonIcon} ${styles.sliderButtonIcon_next}`} />
        </button>
    );
};

export const News = () => {
    return (
        <section className={styles.News}>
            <SectionHeading level={2}>{`Новости`}</SectionHeading>
            <Swiper className={styles.slider} slidesPerView={4} spaceBetween={26}>
                <SwiperButtonPrev />

                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <img className={styles.slideImage} src={NewsImage} alt="" />
                    <h3 className={styles.slideName}>{`Театр`}</h3>
                </SwiperSlide>

                <SwiperButtonNext />
            </Swiper>
        </section>
    );
};
