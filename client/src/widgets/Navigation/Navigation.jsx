import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <ul className={styles.links}>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="/">{`Главная`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="#">{`Основные сведения`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="poster">{`Афиша`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="news">{`Новости`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="#">{`Мероприятия`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="#">{`Пространства`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="#">{`Коллективы`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="#">{`Медиа`}</Link>
                </li>
                <li className={styles.linkContainer}>
                    <Link className={styles.link} to="#">{`Контакты`}</Link>
                </li>
            </ul>
        </nav>
    );
};
