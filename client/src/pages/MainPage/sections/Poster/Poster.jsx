import "./Calendar.css";
import styles from "./Poster.module.css";
import Calendar from "react-calendar";
import { ArrowDownIcon, EventImage, SectionHeading } from "../../../../shared";
import { useState } from "react";
export const Poster = () => {
    const [eventExpand, setEventExpand] = useState(false);

    const expandButtonOnClickHandler = () => setEventExpand((prev) => !prev);

    const eventsExpandClassName = eventExpand ? styles.events_expand : ``;
    const ArrowDownIconExpandClassName = eventExpand ? styles.ArrowDownIcon_expand : ``;
    return (
        <section className={styles.Poster}>
            <SectionHeading level={2}>{`Афиша`}</SectionHeading>
            <div className={styles.content}>
                <div className={styles.eventsContainer}>
                    <div className={`${styles.events} ${eventsExpandClassName}`}>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                        <div className={styles.event}>
                            <div className={styles.eventContainer}>
                                <img className={styles.eventImage} src={EventImage} alt="" />
                                <p className={styles.eventData}>
                                    <span
                                        className={styles.eventDescription}
                                    >{`МОСКОВСКИЙ ТЕАТР ИЛЛЮЗИЙ представляет: ГРАНДИОЗНЫЙ ИЛЛЮЗИОННЫЙ СПЕКТАКЛЬ ДЛЯ ВСЕЙ СЕМЬИ`}</span>
                                    <span className={styles.eventDate}>{`12 августа 2023 в 18:00 | Театр`}</span>
                                </p>
                            </div>
                            <h3 className={styles.eventName}>{`Алладин`}</h3>
                        </div>
                    </div>
                    <button onClick={expandButtonOnClickHandler} className={styles.expandButton}>
                        <ArrowDownIcon className={`${styles.ArrowDownIcon} ${ArrowDownIconExpandClassName}`} />
                    </button>
                </div>
                <Calendar />
            </div>
        </section>
    );
};
