import { Icon } from "../icon/icon";
import { CATEGORYLIST_DATA } from "../../api/Data";
import styles from "./FooterMenu.module.scss";

export function FooterMenu() {
  return (
    <ul className={styles.list}>
      {CATEGORYLIST_DATA.map(({ id, link, title }) => (
        <li className={styles.item} key={id}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
