import cx from "classnames";
import { DefaultButton } from "../button/Button";
import styles from "./CardNew.module.scss";

export function CardNew({ title, description, link, img, date }) {
  return (
    <div className={styles.card}>
      <img src={img} className={styles.img} alt={styles.title}></img>
      <div className={styles.wrapper}>
        <a href={link} className={styles.link}>
          {title}
        </a>
        <p className={styles.description}>{description}</p>
        <div className={styles.block}>
          <span className={styles.label}>{date}</span>
          <DefaultButton />
        </div>
      </div>
    </div>
  );
}
