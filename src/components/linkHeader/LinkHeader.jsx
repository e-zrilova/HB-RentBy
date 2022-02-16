import styles from "./LinkHeader.module.scss";
import { Link } from "./../_ui/link/Link";

export function LinkHeader() {
  return (
    <div className={styles.block}>
      <Link link={"/bookmarks"} iconName="bookmarks">
        Закладки
      </Link>
      <Link color="blue" className={styles.link}>
        Вход и регистрация
      </Link>
    </div>
  );
}
