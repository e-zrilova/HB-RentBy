import styles from "./FooterMenu.module.scss";

import { Icon } from "../icon/icon";

const categoryList = [
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
      {categoryList.map((item) => (
        <li className={styles.item} key={item.id}>
          <a className={styles.link} href={item.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
