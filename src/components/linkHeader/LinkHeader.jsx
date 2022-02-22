import { Link } from "./../_ui/link/Link";
import styles from "./LinkHeader.module.scss";

export function LinkHeader() {
  return (
    <div className={styles.block}>
      <Link link="/bookmarks" iconName="bookmarksIcon">
        Закладки
      </Link>
      <Link color="blue" className={styles.link}>
        Вход и регистрация
      </Link>
    </div>
  );
}
