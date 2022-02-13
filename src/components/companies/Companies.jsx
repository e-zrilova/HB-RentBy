import styles from "./Companies.module.scss";
import { Icon } from "../icon/icon";

const companiesList = [
  {
    id: 1,
    title: "Visa",
    link: "#",
    logoUrl: "./assets/images/companies/visa.png",
  },
  {
    id: 2,
    title: "Webpay",
    link: "#",
    logoUrl: "./assets/images/companies/webpay.png",
  },
  {
    id: 3,
    title: "verifiedbyvisa",
    link: "#",
    logoUrl: "./assets/images/companies/verifiedbyvisa.png",
  },
  {
    id: 4,
    title: "MasterCard",
    link: "#",
    logoUrl: "./assets/images/companies/mastercard.png",
  },
  {
    id: 5,
    title: "securecode",
    link: "#",
    logoUrl: "./assets/images/companies/securecode.png",
  },
  {
    id: 6,
    title: "verifiedbyvisa",
    link: "#",
    logoUrl: "./assets/images/companies/verifiedbyvisa.png",
  },
];
export function Companies() {
  return (
    <ul className={styles.list}>
      {companiesList.map((item) => (
        <li key={item.id} className={styles.item}>
          <a href={item.link}>
            <img src={item.logoUrl} alt={item.title}></img>
          </a>
        </li>
      ))}
    </ul>
  );
}
