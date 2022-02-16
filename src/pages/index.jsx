import styles from "./index.scss";
import { Default } from "../components/layouts/Default";
import { CardsNews } from "../components/cardsNews/CardsNews";

export function Newslist() {
  return (
    <div>
      <Default className={styles.flex}>
        <div className={styles.decor}></div>
        <CardsNews />
      </Default>
    </div>
  );
}
