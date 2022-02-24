import clsx from "clsx";
import { FooterMenu } from "../footerMenu/footerMenu";
import { CategoryFooter } from "../categoryFooter/categoryFooter";
import { Social } from "../social/Social";
import { Payments } from "../payments/Payments";
import { INFO_DATA } from "../../api/Data";
import styles from "./Footer.module.scss";

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
            />
            <span className={styles.text}>СДАЁМ БАЙ</span>
            <p className={styles.contacts}>{INFO_DATA.contacts}</p>
            <div className={styles.linkWrapper}>
              <a className={styles.link} href={`tel:${INFO_DATA.phone}`}>
                {INFO_DATA.phone}
              </a>
              ,&nbsp;
              <a className={styles.link} href={`mailto:${INFO_DATA.email}`}>
                {INFO_DATA.email}
              </a>
            </div>
            <p className={clsx(styles.workTime)}>
              "Режим работы:{INFO_DATA.worktime}
            </p>
          </div>
          <div>
            <div className={styles.wrapper}>
              <CategoryFooter />
              {<FooterMenu />}
            </div>
            <div className={styles.label}>
              <Social />
              <Payments />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
