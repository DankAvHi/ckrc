import styles from "./Footer.module.css";
import { FooterWaveIcon } from "../../shared";

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <FooterWaveIcon className={styles.wave} />
            <div className={styles.content}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>{`Сторонние ресурсы`}</h2>
                </div>
            </div>
        </footer>
    );
};
