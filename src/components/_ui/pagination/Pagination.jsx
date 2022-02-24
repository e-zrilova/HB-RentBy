import { PAGINATION_DATA } from "../../../api/Data";
import styles from "./Pagination.module.scss";

export function Pagination() {
  return (
    <ul className={styles.list}>
      {PAGINATION_DATA.map((item, index) => (
        <li key={index} className={styles.item}>
          <a href="#" className={styles.link}>
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
