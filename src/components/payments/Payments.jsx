import { Icon } from "../icon/icon";
import { PAYMENTS_DATA } from "../../api/Data";
import styles from "./Payments.module.scss";

export function Payments() {
  return (
    <ul className={styles.list}>
      {PAYMENTS_DATA.map(({ id, link, logoUrl, title }) => (
        <li key={id} className={styles.item}>
          <a href={link}>
            <img src={logoUrl} alt={title} />
          </a>
        </li>
      ))}
    </ul>
  );
}
