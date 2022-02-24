import { Icon } from "../icon/icon";
import { SOCIALLIST_DATA } from "../../api/Data";
import styles from "./Social.module.scss";

export function Social() {
  return (
    <ul className={styles.list}>
      Мы в соцсетях
      {SOCIALLIST_DATA.map(({ id, link, svg }) => (
        <li key={id} className={styles.item}>
          <a href={link} className={styles.link}>
            {svg && <Icon iconName={svg} color="purple" />}
          </a>
        </li>
      ))}
    </ul>
  );
}
