import styles from "./Search.module.scss";
import { Icon } from "../../icon/icon";

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
          <Icon iconName="loupe" />
        </button>
      </label>
    </form>
  );
}
