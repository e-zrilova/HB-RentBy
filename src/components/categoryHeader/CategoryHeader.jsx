import styles from "./CategoryHeader.module.scss";

import { Icon } from "../icon/icon";

const categoryList = [
  {
    id: 1,
    title: "Квартиры на сутки",
    link: "#",
    svg: "marker",
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
export function Category() {
  return (
    <ul className={styles.list}>
      {categoryList.map((item) => (
        <li key={item.id} className={styles.item}>
          <a href={item.link} className={styles.link}>
            {item.title}
          </a>
          {item.svg && <Icon iconName={item.svg} />}
        </li>
      ))}
    </ul>
  );
}
