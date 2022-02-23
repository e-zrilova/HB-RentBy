import styles from "./Pagination.module.scss";

const PAGINATION_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];

export function Pagination() {
  return (
    <ul className={styles.list}>
      {PAGINATION_DATA.map((item, index) => (
        <li key={index} className={styles.item}>
          <a>{item}</a>
        </li>
      ))}
    </ul>
  );
}
