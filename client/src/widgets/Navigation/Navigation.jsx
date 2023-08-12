import styles from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <nav className={styles.Navigation}>
            <ul className={styles.links}>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Главная`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Основные сведения`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Афиша`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Новости`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Мероприятия`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Пространства`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Коллективы`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Медиа`}</a>
                </li>
                <li className={styles.linkContainer}>
                    <a className={styles.link} href="#">{`Контакты`}</a>
                </li>
            </ul>
        </nav>
    );
};
