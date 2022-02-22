import { useEffect, useState } from "react";
import { Icon } from "./../icon/icon";
import { pathTitles } from "./breadcrumbs.consts";
import styles from "./Breadcrumbs.module.scss";
// const crumbs = [
//   {
//     title: "Новости",
//     path: "/news",
//   },
// ];

export function BreadCrumbs() {
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    const pathArrray = window.location.pathname
      .split("/")
      .filter((item) => item.length);

    const newCrumbs = pathArrray.map((item) => ({
      title: pathTitles[item],
      path: "",
    }));

    setCrumbs(newCrumbs);
  }, []);

  return (
    <ul className={styles.list}>
      <li>
        <Icon iconName="homeIcon" />
      </li>
      {crumbs.map((item, index) => (
        <li key={index} className={styles.item}>
          <a className={styles.link} href={item.path}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
