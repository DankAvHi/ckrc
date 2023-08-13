import styles from "./NewsPage.module.css";
import { EventImage, NewsImage, NewsImagePlaceholderIcon, PageWrapper, SectionHeading } from "../../shared";
import { Link } from "react-router-dom";

export const NewsPage = () => {
    return (
        <PageWrapper>
            <SectionHeading>{`Новости`}</SectionHeading>

            <article className={styles.news}>
                <NewsImagePlaceholderIcon className={styles.newsImage} />
                <div className={styles.newsContent}>
                    <h2 className={styles.newsHeading}>{`Заголовок новости`}</h2>
                    <p className={styles.newsDescription}>
                        {`Слуга, из чувства приличия, а может быть, и не желая остаться под барским глазом, зашел под
                        ворота и закурил трубку. Николай Петрович поник головой и начал глядеть на ветхие ступеньки
                        крылечка: крупный пестрый цыпленок степенно расхаживал по ним, крепко стуча своими большими
                        желтыми ногами; запачканная кошка недружелюбно посматривала на него, жеманно прикорнув на
                        перила. Солнце пекло; из полутемных сеней постоялого дворика несло запахом теплого ржаного
                        хлеба...`}
                    </p>
                    <Link className={styles.newsLink}>{`Подробнее...`}</Link>
                </div>
            </article>
            <article className={styles.news}>
                <img className={styles.newsImage} src={NewsImage} alt="" />
                <div className={styles.newsContent}>
                    <h2 className={styles.newsHeading}>{`Заголовок новости`}</h2>
                    <p className={styles.newsDescription}>
                        {`Слуга, из чувства приличия, а может быть, и не желая остаться под барским глазом, зашел под
                        ворота и закурил трубку. Николай Петрович поник головой и начал глядеть на ветхие ступеньки
                        крылечка: крупный пестрый цыпленок степенно расхаживал по ним, крепко стуча своими большими
                        желтыми ногами; запачканная кошка недружелюбно посматривала на него, жеманно прикорнув на
                        перила. Солнце пекло; из полутемных сеней постоялого дворика несло запахом теплого ржаного
                        хлеба...`}
                    </p>
                    <Link className={styles.newsLink}>{`Подробнее...`}</Link>
                </div>
            </article>
            <article className={styles.news}>
                <NewsImagePlaceholderIcon className={styles.newsImage} />
                <div className={styles.newsContent}>
                    <h2 className={styles.newsHeading}>{`Заголовок новости`}</h2>
                    <p className={styles.newsDescription}>
                        {`Слуга, из чувства приличия, а может быть, и не желая остаться под барским глазом, зашел под
                        ворота и закурил трубку. Николай Петрович поник головой и начал глядеть на ветхие ступеньки
                        крылечка: крупный пестрый цыпленок степенно расхаживал по ним, крепко стуча своими большими
                        желтыми ногами; запачканная кошка недружелюбно посматривала на него, жеманно прикорнув на
                        перила. Солнце пекло; из полутемных сеней постоялого дворика несло запахом теплого ржаного
                        хлеба...`}
                    </p>
                    <Link className={styles.newsLink}>{`Подробнее...`}</Link>
                </div>
            </article>
        </PageWrapper>
    );
};
