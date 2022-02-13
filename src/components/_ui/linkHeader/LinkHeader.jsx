import styles from "./Link.module.scss";
import { Icon } from "../../icon/icon";

const Link = [
  {
    id: 1,
    title: "Закладки",
    link: "",
    svg: "bookmarks",
  },
  {
    id: 2,
    title: "Вход и регистрация",
    link: "#",
  },
];
export function LinkHeader() {
  return (
    <ul className={styles.list}>
      {Link.map((item) => (
        <li key={item.id} className={styles.item}>
          <a className={styles.link} href={item.link}>
            {item.title}
          </a>
          {item.svg && <Icon iconName={item.svg} />}
        </li>
      ))}
    </ul>
  );
}
