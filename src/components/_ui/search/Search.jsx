import { Icon } from "components/icon/icon";
import styles from "./Search.module.scss";

export function Search() {
  return (
    <form className={styles.form}>
      <label className={styles.wrapper}>
        <input
          type="text"
          name="name"
          placeholder="Поиск по статьям"
          className={styles.inputSearch}
        />
        <button type="submit" className={styles.btn}>
          <Icon iconName="loupeIcon" />
        </button>
      </label>
    </form>
  );
}
