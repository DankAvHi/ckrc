import { PageWrapper, PosterPlaceholder1Image, PosterPlaceholder2Image, SectionHeading } from "../../shared";
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
                            <p className={styles.eventData}>
                                <span
                                    className={styles.eventDataField}
                                >{`Дата и время мероприятия: 19 октября 2023 в 19:00`}</span>
                                <span className={styles.eventDataField}>{`Категория: Концерты`}</span>
                            </p>
                            <Link className={styles.eventLink}>{`Подробнее...`}</Link>
                        </div>
                    </div>
                    <div className={styles.event}>
                        <img className={styles.eventImage} src={PosterPlaceholder2Image} alt="" />
                        <div className={styles.eventInfo}>
                            <h2 className={styles.eventHeading}>{`СПЕКТАКЛЬ «СТАРШИЙ СЫН»`}</h2>
                            <p className={styles.eventTitleData}>
                                <span className={styles.eventTitleDataField}>{`Стоимость: 3 000 — 6 000 руб.`}</span>
                                <span
                                    className={styles.eventTitleDataField}
                                >{`Продолжительность: 2 часа 40 минут с одним антрактом.`}</span>
                            </p>
                            <p
                                className={styles.eventDescription}
                            >{`Время, наверное, сейчас такое… Суетное, торопливое, прагматичное, слишком материальное. Хочется найти свой островок, где всегда тепло и уютно, где будут только родные и близкие люди, где тебя примут таким, какой ты есть. Создатели спектакля «Старший сын» попытались воплотить такой мир, куда не доносятся отголоски суеты большого...`}</p>
                            <p className={styles.eventData}>
                                <span
                                    className={styles.eventDataField}
                                >{`Дата и время мероприятия: 13 октября 2023 в 19:00`}</span>
                                <span className={styles.eventDataField}>{`Категория: Театр`}</span>
                            </p>
                            <Link className={styles.eventLink}>{`Подробнее...`}</Link>
                        </div>
                    </div>
                </div>
                <Calendar />
            </div>
        </PageWrapper>
    );
};
