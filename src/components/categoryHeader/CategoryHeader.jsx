import { Icon } from "../icon/icon";
import styles from "./CategoryHeader.module.scss";

const CATEGORYLIST_DATA = [
  {
    id: 1,
    title: "Квартиры на сутки",
    link: "#",
    svg: "markerIcon",
  },
  {
    id: 2,
    title: "Коттеджи и усадьбы",
    link: "#",
  },
  {
    id: 3,
    title: "Бани и Сауны",
    link: "#",
  },
  {
    id: 4,
    title: "Авто напрокат",
    link: "#",
  },
];
export function CategoryHeader() {
  return (
    <ul className={styles.list}>
      {CATEGORYLIST_DATA.map(({ id, link, title, svg }) => (
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
