import { PageWrapper, PosterPlaceholder1Image, SectionHeading } from "../../shared";
import styles from "./PosterPage.module.css";
import Calendar from "react-calendar";
import "./Calendar.css";
import { Link } from "react-router-dom";

export const PosterPage = () => {
    return (
        <PageWrapper>
            <SectionHeading>{`Афиша`}</SectionHeading>
            <div className={styles.poster}>
                <div className={styles.events}>
                    <div className={styles.event}>
                        <img className={styles.eventImage} src={PosterPlaceholder1Image} alt="" />
                        <div className={styles.eventInfo}>
                            <h2 className={styles.eventHeading}>{`JOE LYNN TURNER`}</h2>
                            <p className={styles.eventTitleData}>
                                <span className={styles.eventTitleDataField}>{`Стоимость: 2 000 - 8 000 руб.`}</span>
                            </p>
                            <p
                                className={styles.eventDescription}
                            >{`Знаменитый рок-музыкант, оказавший невероятное влияние на успешное становление и развитие таких монстров рока, как Deep Purple, Rising Force, Rainbow и других, автор и вокалист Джо Линн Тёрнер, выступит перед российскими фанатами и зрителями с новой концертной программой.`}</p>
                            <p
                                className={styles.eventDataField}
                            >{`Дата и время мероприятия: 19 октября 2023 в 19:00`}</p>
                            <p className={styles.eventDataField}>{`Категория: Концерты`}</p>
                            <Link className={styles.eventLink}>{`Подробнее...`}</Link>
                        </div>
                    </div>
                </div>
                <Calendar />
            </div>
        </PageWrapper>
    );
};
