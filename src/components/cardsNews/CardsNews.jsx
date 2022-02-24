import { NewsItem } from "components/_ui/NewsItem/NewsItem";
import { CARDS_DATA } from "../../api/Data";
import styles from "./cardsNews.module.scss";

export function CardsNews() {
  return (
    <ul className={styles.list}>
      {CARDS_DATA.map(({ id, title, img, link, date, description }) => (
        <li key={id} className={styles.item}>
          <NewsItem
            title={title}
            img={img}
            link={link}
            description={description}
            date={date}
          />
        </li>
      ))}
    </ul>
  );
}
