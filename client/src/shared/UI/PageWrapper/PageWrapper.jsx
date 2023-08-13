import styles from "./PageWrapper.module.css";

export const PageWrapper = (props) => {
    return (
        <main className={styles.PageWrapper}>
            {props.topChildren}
            <div className={styles.container}>{props.children}</div>
        </main>
    );
};
