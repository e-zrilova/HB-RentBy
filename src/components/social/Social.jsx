import styles from "./Social.module.scss";
import { Icon } from "../icon/icon";

const socialList = [
  {
    id: 1,
    link: "www.instagram.com",
    svg: "instagram",
  },
  {
    id: 2,
    link: "www.vk.com",
    svg: "vk",
  },
  {
    id: 3,
    link: "www.facebook.com",
    svg: "facebook",
  },
];
export function Social() {
  return (
    <ul className={styles.list}>
      {" "}
      Мы в соцсетях
      {socialList.map((item) => (
        <li key={item.id} className={styles.item}>
          <a href={item.link}>{item.svg && <Icon iconName={item.svg} />}</a>
        </li>
      ))}
    </ul>
  );
}
