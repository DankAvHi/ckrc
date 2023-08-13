import { createElement } from "react";
import styles from "./SectionHeading.module.css";

export const SectionHeading = (props) => {
    return createElement(`h${props.level || 1}`, { className: styles.SectionHeading }, props.children);
};
