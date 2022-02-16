import styles from "./index.module.scss";
import { Default } from "../components/layouts/Default";
import { CardsNews } from "../components/cardsNews/CardsNews";
import { Search } from "../components/_ui/search/Search";

export function Newslist() {
  return (
    <div className={styles.wrapper}>
      <Default className={styles.flex}>
        <div className={styles.decor}></div>
        <Search />
        <h1 className={styles.title}>Новости</h1>
        <CardsNews />
      </Default>
    </div>
  );
}
