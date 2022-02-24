import { Icon } from "../icon/icon";
import { DEFAULTMENU_DATA } from "../../api/Data";
import styles from "./HeaderMenu.module.scss";

export function HeaderMenu() {
  return (
    <ul className={styles.list}>
      {DEFAULTMENU_DATA.map(({ title, id, link, svg }) => (
        <li key={id} className={styles.item}>
          <a href={link} className={styles.link}>
            {svg && <Icon iconName={svg} />}
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
}
