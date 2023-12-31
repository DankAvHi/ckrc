import styles from "./Header.module.css";
import { LogoImage, CallIcon, MapPinIcon, ArrowRightIcon } from "../../shared";

export const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.logoImage} src={LogoImage} alt="Логотип" />
                    <p
                        className={styles.logoText}
                    >{`МБУ «ЦЕНТРАЛИЗОВАННЫЙ КУЛЬТУРНО - РАЗВЛЕКАТЕЛЬНЫЙ ЦЕНТР ПШЕХСКОГО СЕЛЬСКОГО ПОСЕЛЕНИЯ БЕЛОРЕЧЕНСКОГО РАЙОНА»`}</p>
                </div>
                <ul className={styles.contacts}>
                    <li className={styles.contact}>
                        <CallIcon width={25} height={25} />
                        <p className={styles.phoneText}>{`8 (86155) 67-2-10`}</p>
                    </li>
                    <li className={styles.contact}>
                        <MapPinIcon width={25} height={40} />
                        <p className={styles.mapText}>
                            {`Белореченский`}
                            <br />
                            {`район, ул. Горького, 12`}
                        </p>
                    </li>
                </ul>
                <div className={styles.widget}>
                    <p className={styles.widgetTitle}>{`Сложности с получением «Пушкинской карты»?`}</p>
                    <a
                        className={styles.widgetButton}
                        href="https://pos.gosuslugi.ru/form/?opaId=355440&utm_source=vk&utm_medium=03&utm_campaign=1052301317881"
                        target="_blank"
                    >{`Написать`}</a>
                </div>
                <ul className={styles.links}>
                    <li className={styles.linkContainer}>
                        <a href="#" className={styles.link}>
                            <p className={styles.linkText}>{`Выбрать ЦКР 2`}</p>
                            <ArrowRightIcon className={styles.linkIcon} />
                        </a>
                    </li>
                    <li className={styles.linkContainer}>
                        <a href="#" className={styles.link}>
                            <p className={styles.linkText}>{`Выбрать ЦКР 3`}</p>
                            <ArrowRightIcon className={styles.linkIcon} />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
