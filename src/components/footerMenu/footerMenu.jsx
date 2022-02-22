import { Icon } from "../icon/icon";
import styles from "./FooterMenu.module.scss";

const CATEGORYLIST_DATA = [
  {
    id: 1,
    title: "Новости",
    link: "#",
  },
  {
    id: 2,
    title: "Размещение и тарифы ",
    link: "#",
  },
  {
    id: 3,
    title: "Объявления на карте",
    link: "#",
  },
  {
    id: 4,
    title: "Контакты",
    link: "#",
  },
];
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
