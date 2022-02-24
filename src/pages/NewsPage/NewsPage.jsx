import { LayoutDefault } from "../../components/layouts/LayoutDefault";
import { CardsNews } from "../../components/cardsNews/CardsNews";
import { Search } from "../../components/_ui/search/Search";
import { BreadCrumbs } from "../../components/breadcrumbs/Breadcrumbs";
import { Pagination } from "../../components/_ui/pagination/Pagination";
import styles from "./NewsPage.module.scss";

export function NewsPage() {
  return (
    <div className={styles.wrapper}>
      <LayoutDefault className={styles.flex}>
        <BreadCrumbs />
        <div className={styles.decor}></div>
        <Search />
        <h1 className={styles.title}>Новости</h1>
        <CardsNews />
        <Pagination />
      </LayoutDefault>
    </div>
  );
}
