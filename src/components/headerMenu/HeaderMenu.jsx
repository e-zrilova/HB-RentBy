import { Icon } from "../icon/icon";
import styles from "./HeaderMenu.module.scss";

const DEFAULTMENU_DATA = [
  {
    id: 1,
    title: "Главная",
    link: "",
  },
  {
    id: 2,
    title: "Новости",
    link: "",
  },
  {
    id: 3,
    title: "Размещение и тарифы ",
    link: "",
  },
  {
    id: 4,
    title: "Объявления на карте",
    link: "",
    svg: "markerIcon",
  },
  {
    id: 5,
    title: "Контакты",
    link: "",
  },
];
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
