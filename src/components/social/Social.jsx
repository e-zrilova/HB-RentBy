import { Icon } from "../icon/icon";
import styles from "./Social.module.scss";

const SOCIALLIST_DATA = [
  {
    id: 1,
    link: "www.instagram.com",
    svg: "instagramIcon",
  },
  {
    id: 2,
    link: "www.vk.com",
    svg: "vkIcon",
  },
  {
    id: 3,
    link: "www.facebook.com",
    svg: "facebookIcon",
  },
];
export function Social() {
  return (
    <ul className={styles.list}>
      Мы в соцсетях
      {SOCIALLIST_DATA.map(({ id, link, svg }) => (
        <li key={id} className={styles.item}>
          <a href={link} className={styles.link}>
            {svg && <Icon iconName={svg} color="purple" />}
          </a>
        </li>
      ))}
    </ul>
  );
}
