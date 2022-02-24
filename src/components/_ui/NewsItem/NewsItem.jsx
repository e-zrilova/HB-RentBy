import clsx from "clsx";
import { DefaultButton } from "components/_ui/button/Button";
import styles from "./NewsItem.module.scss";

export function NewsItem({ title, description, link, img, date }) {
  return (
    <a className={styles.card} href={link}>
      <img src={img} className={styles.img} alt={styles.title} />
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.block}>
          <p className={styles.label}>{date}</p>
          <DefaultButton>Читать</DefaultButton>
        </div>
      </div>
    </a>
  );
}
