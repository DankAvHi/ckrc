import styles from "./MainPage.module.css";
import { Slider } from "../../widgets";
import { News, Poster } from "./sections";

export const MainPage = () => {
    return (
        <main className={styles.MainPage}>
            <Slider />
            <div className={styles.container}>
                <Poster />
                <News />
            </div>
        </main>
    );
};
