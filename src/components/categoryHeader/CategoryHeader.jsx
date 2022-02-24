import { Icon } from "../icon/icon";
import { CATEGORY_HEADER_DATA } from "../../api/Data";
import styles from "./CategoryHeader.module.scss";

export function CategoryHeader() {
  return (
    <ul className={styles.list}>
      {CATEGORY_HEADER_DATA.map(({ id, link, title, svg }) => (
        <li key={id} className={styles.item}>
          <a href={link} className={styles.link}>
            {title}
          </a>
          {svg && <Icon iconName={svg} />}
        </li>
      ))}
    </ul>
  );
}
