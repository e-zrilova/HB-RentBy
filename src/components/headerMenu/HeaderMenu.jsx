import styles from "./HeaderMenu.module.scss";
import { Icon } from "../icon/icon";

const defaultMenu = [
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
    svg: "marker",
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
      {defaultMenu.map((item) => (
        <li key={item.id} className={styles.item}>
          <a href={item.link} className={styles.link}>
            {item.svg && <Icon iconName={item.svg} />}
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
