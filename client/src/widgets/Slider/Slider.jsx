import styles from "./Slider.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, SlideImage } from "../../shared";

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

export const Slider = () => {
    return (
        <Swiper className={styles.Slider} modules={[Navigation]}>
            <SwiperButtonPrev />
            <SwiperSlide className={styles.slide}>
                <img className={styles.slideImage} src={SlideImage} alt="" />
                <div className={styles.slideDescription}>
                    <div className={styles.slideDescriptionTitle}>
                        <p className={styles.slideDescriptionTitleText}>{`Фасад учреждения`}</p>
                        <ArrowUpIcon className={styles.slideDescriptionTitleIcon} />
                    </div>
                    <p
                        className={styles.slideDescriptionText}
                    >{`Это был огромный в два обхвата дуб с обломанными, давно видно, суками и с обломанной корой, заросшей старыми болячками. С огромными своими неуклюжими, несимметрично-растопыренными корявыми руками и пальцами, он старым, сердитым и презрительным уродом стоял между улыбающимися березами.`}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img className={styles.slideImage} src={SlideImage} alt="" />
                <div className={styles.slideDescription}>
                    <div className={styles.slideDescriptionTitle}>
                        <p className={styles.slideDescriptionTitleText}>{`Фасад учреждения`}</p>
                        <ArrowUpIcon className={styles.slideDescriptionTitleIcon} />
                    </div>
                    <p
                        className={styles.slideDescriptionText}
                    >{`Это был огромный в два обхвата дуб с обломанными, давно видно, суками и с обломанной корой, заросшей старыми болячками. С огромными своими неуклюжими, несимметрично-растопыренными корявыми руками и пальцами, он старым, сердитым и презрительным уродом стоял между улыбающимися березами.`}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img className={styles.slideImage} src={SlideImage} alt="" />
                <div className={styles.slideDescription}>
                    <div className={styles.slideDescriptionTitle}>
                        <p className={styles.slideDescriptionTitleText}>{`Фасад учреждения`}</p>
                        <ArrowUpIcon className={styles.slideDescriptionTitleIcon} />
                    </div>
                    <p
                        className={styles.slideDescriptionText}
                    >{`Это был огромный в два обхвата дуб с обломанными, давно видно, суками и с обломанной корой, заросшей старыми болячками. С огромными своими неуклюжими, несимметрично-растопыренными корявыми руками и пальцами, он старым, сердитым и презрительным уродом стоял между улыбающимися березами.`}</p>
                </div>
            </SwiperSlide>
            <SwiperButtonNext />
        </Swiper>
    );
};
