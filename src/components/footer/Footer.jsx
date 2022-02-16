import styles from "./Footer.module.scss";
import { FooterMenu } from "../footerMenu/index";
import { Category } from "../categoryFooter/index";
import { Social } from "../social/Social";
import { Companies } from "../companies/Companies";
import cx from "classnames";
const info = {
  contacts:
    "ИП Шушкевич Андрей Викторович \n УНП 192602485 Минским горисполкомом 10.02.2016 220068 \n РБ, г. Минск, ул. Осипенко, 21, кв.23",
  phone: "+375 29 621 48 33",
  email: "sdaem@sdaem.by",
  worktime: "Режим работы: 08:00-22:00",
};
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <img
              width={134}
              height={19}
              src="../assets/images/logo.png"
              alt="Логотип компании SDAEM.BY"
            ></img>
            <span className={styles.text}>СДАЁМ БАЙ</span>
            <p className={styles.contacts}>{info.contacts}</p>
            <div className={styles.linkWrapper}>
              <a className={styles.link} href={`tel:${info.phone}`}>
                {info.phone}
              </a>
              ,&nbsp;
              <a className={styles.link} href={`mailto:${info.email}`}>
                {info.email}
              </a>
            </div>
            <p className={cx(styles.workTime)}>{info.worktime}</p>
          </div>
          <div>
            <div className={styles.wrapper}>
              <Category />
              {<FooterMenu />}
            </div>
            <div className={styles.label}>
              <Social />
              <Companies />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
