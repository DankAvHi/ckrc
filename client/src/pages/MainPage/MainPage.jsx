import styles from "./MainPage.module.css";
import { Slider } from "../../widgets";
import { News, Poster } from "./sections";
import { PageWrapper } from "../../shared";

export const MainPage = () => {
    return (
        <PageWrapper topChildren={<Slider />}>
            <Poster />
            <News />
        </PageWrapper>
    );
};
