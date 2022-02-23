import { Link } from "./../_ui/link/Link";
import { Icon } from "components/icon/icon";
import styles from "./LinkHeader.module.scss";

export function LinkHeader() {
  return (
    <div className={styles.block}>
      <Link link="/bookmarks">
        Закладки
        <Icon iconName="bookmarksIcon" />
      </Link>
      <Link color="blue" className={styles.link}>
        Вход и регистрация
      </Link>
    </div>
  );
}
