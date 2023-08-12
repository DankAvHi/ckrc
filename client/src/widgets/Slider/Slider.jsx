import styles from "./Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowUpIcon, SlideImage } from "../../shared";

export const Slider = () => {
    return (
        <Swiper className={styles.Slider} modules={[Navigation]}>
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
        </Swiper>
    );
};
