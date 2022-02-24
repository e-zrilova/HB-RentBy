import { CATEGORY_FOOTER_DATA } from "../../api/Data";
import styles from "./categoryFooter.module.scss";

export function CategoryFooter() {
  return (
    <ul className={styles.list}>
      {CATEGORY_FOOTER_DATA.map(({ id, title, link, category }) => (
        <li key={id} className={styles.item}>
          <a className={styles.link} href={link}>
            {title}
          </a>
          <ul className={styles.levelList}>
            {category &&
              category.map(({ id, title, link }) => (
                <li key={id} className={styles.levelItem}>
                  <a className={styles.levelLink} href={link}>
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
