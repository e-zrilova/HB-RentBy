import { Icon } from "../icon/icon";
import styles from "./Payments.module.scss";

const PAYMENTS_DATA = [
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
export function Payments() {
  return (
    <ul className={styles.list}>
      {PAYMENTS_DATA.map(({ id, link, logoUrl, title }) => (
        <li key={id} className={styles.item}>
          <a href={link}>
            <img src={logoUrl} alt={title} />
          </a>
        </li>
      ))}
    </ul>
  );
}
