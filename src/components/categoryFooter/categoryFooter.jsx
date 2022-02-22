import styles from "./categoryFooter.module.scss";
const list = [
  {
    id: 1,
    title: "Коттеджи и усадьбы",
    link: "#",
  },
  {
    id: 2,
    title: "Бани и сауны",
    link: "#",
  },
  {
    id: 3,
    title: "Авто на прокат",
    link: "#",
  },
  {
    id: 4,
    title: "Квартиры",
    link: "#",
    category: [
      {
        id: 1,
        title: "Квартиры в Минске",
        link: "#",
      },
      {
        id: 2,
        title: "Квартиры в Гомеле",
        link: "#",
      },
      {
        id: 3,
        title: "Квартиры в Бресте",
        link: "#",
      },
      {
        id: 4,
        title: "Квартиры в Витебске",
        link: "#",
      },
      {
        id: 5,
        title: "Квартиры в Гродно",
        link: "#",
      },
      {
        id: 6,
        title: "Квартиры в Могилеве",
        link: "#",
      },
    ],
  },
];
export function Category() {
  return (
    <ul className={styles.list}>
      {list.map(({ id, title, link, category }) => (
        <li key={id} className={styles.item}>
          <a className={styles.link} href={link}>
            {title}
          </a>
          <ul className={styles.levelList}>
            {category &&
              category.map(({ id, title, link }) => (
                <li key={id} className={styles.levelItem}>
                  <a className={styles.levelLink} href={link}>
                    {title}
                  </a>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
