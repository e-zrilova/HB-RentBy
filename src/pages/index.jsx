import styles from "./index.module.scss";
import { Default } from "../components/layouts/Default";
import { CardsNews } from "../components/cardsNews/CardsNews";
import { Search } from "../components/_ui/search/Search";
import { BreadCrumbs } from "../components/breadcrumbs/Breadcrumbs";

export function Newslist() {
  return (
    <div className={styles.wrapper}>
      <Default className={styles.flex}>
        <BreadCrumbs />
        <div className={styles.decor}></div>
        <Search />
        <h1 className={styles.title}>Новости</h1>
        <CardsNews />
      </Default>
    </div>
  );
}
